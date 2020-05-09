class xoGame {
    constructor(root,cell){
        this.root = root;
        this.count = 0;
        this.resetBut=document.querySelector(".reset");
        this.cell= cell;
        this.currentPlayer='p1';
        this.player1Text = "X";
        this.player2Text = "0";
        this.currentPlayerName=document.querySelector("#currentplayer")
        
        this.table = this.multiArrayMaker(this.cell);
        this.player1 = this.multiArrayMaker(this.cell);
        this.player2 = this.multiArrayMaker(this.cell);
        this.p1RowNeighbour = this.singleArrayMaker(this.cell);
        this.p2RowNeighbour = this.singleArrayMaker(this.cell);
        this.p1ColNeighbour = this.singleArrayMaker(this.cell);
        this.p2ColNeighbour = this.singleArrayMaker(this.cell);
        this.p1CrossL=this.singleArrayMaker(this.cell);
        this.p2CrossR=this.singleArrayMaker(this.cell);
        this.p1CrossR=this.singleArrayMaker(this.cell);
        this.p2CrossL=this.singleArrayMaker(this.cell);
        this.initialize();
        this.multiArrayMaker();
        this.root.addEventListener("click",(e)=>{
            this.count++;
            console.log(this.count)
            if(this.count ==(this.cell * this.cell)){
                this.currentPlayerName.innerText="Oh no! Game Over!! Press Reset to Play Again!! "
                return;
                
            }
        this.markValue(this.currentPlayer,e.target.dataset);
        
            if(this.winCheck()){
                
                
               
                this.root.hidden= true;
                if(this.currentPlayer=="p1"){
                    this.currentPlayerName.innerText="Player 1 Wins !! Press Reset to play again!!"
                }else{
                    this.currentPlayerName.innerText="Player 2 Wins !! Press Reset to play again!!"

                }
                this.currentPlayer="p1"
                
                return;   
            }
            this.changePlayer();
        })
        this.resetBut.addEventListener("click",()=>this.gameReset())

    }
    initialize(){
        const {cell}= this;
        this.currentPlayerName.innerText="Player 1 starts !!!!"
        for(let i=0;i<this.cell;i++)
        {this.root.appendChild(document.createElement("br"))
            for(let j=0;j<this.cell;j++)
            {
                let element= document.createElement("button");
                element.setAttribute("data-codrow",`${i}`)
                element.setAttribute("data-codcol",`${j}`)
                
                element.classList.add("button");
                
                element.classList.add("is-link")
                element.classList.add("is-outlined")
                element.classList.add(`entries${i}${j}`);
                element.innerText="--"
                this.root.appendChild(element)

            } 
            
        }
    }
    multiArrayMaker(num){
        let temp = Array(num).fill(null);
        temp.forEach((val,index)=>{
            temp[index] = (Array(num).fill(null))
        })
        return temp;
    }
    singleArrayMaker(num){
        let temp = Array(num).fill(null);
        
        return temp;
    }
    changePlayer(){
        if(this.currentPlayer==="p1")
        {
            this.currentPlayer="p2";
            this.currentPlayerName.innerText="Player 2's chance !!"
        }else{
            this.currentPlayer="p1";
            this.currentPlayerName.innerText="Player 1's chance !!"
        }
    }
    markValue(player,val){
        const {codrow,codcol} = val;
       
        let tempElement = document.querySelector(`.entries${codrow}${codcol}`)
        if (player === "p1")
        {   this.p1CrossL = this.singleArrayMaker(this.cell);
            this.p1CrossR = this.singleArrayMaker(this.cell);
            tempElement.style.color="blue";
            tempElement.classList.remove("is-link");
            tempElement.classList.add("is-warning");

            tempElement.innerText = this.player1Text;
            tempElement.disabled =true;
            this.table[codrow][codcol]=this.player1Text;
            this.player1[codrow][codcol]=true;
            this.getNeighbour(parseInt(codrow),parseInt(codcol));
          

        }else{
            this.p2CrossL = this.singleArrayMaker(this.cell);
            this.p2CrossR = this.singleArrayMaker(this.cell);
            tempElement.style.color="red"
            tempElement.innerText = this.player2Text;
            tempElement.classList.remove("is-link");
            tempElement.classList.add("is-danger");

            this.table[codrow][codcol]=this.player2Text;
            tempElement.disabled =true;
            this.player2[codrow][codcol]=true;
            this.getNeighbour(parseInt(codrow),parseInt(codcol));

        }
    }
    getNeighbour(currRow,currCol){
        const {currentPlayer,cell}=this;

        if(currentPlayer=="p1"){
            this.p1RowNeighbour.forEach((val,index)=>{
                this.p1RowNeighbour[index]=[parseInt(currRow),index];
            })
            this.p1ColNeighbour.forEach((val,index)=>{
                this.p1ColNeighbour[index]=[index,parseInt(currCol)];
            })
            if((currRow===currCol)){
                this.p1CrossL.forEach((val,index)=>{
                    this.p1CrossL[index]=[index,index]
                })
            }
            if((currRow+currCol === cell-1)){
                this.p1CrossR.forEach((val,index)=>{
                    this.p1CrossR[index]=[index,cell-1-index]
                })

            }
            
        }else{
            this.p2RowNeighbour.forEach((val,index)=>{
                this.p2RowNeighbour[index]=[parseInt(currRow),index];
            })
            this.p2ColNeighbour.forEach((val,index)=>{
                this.p2ColNeighbour[index]=[index,parseInt(currCol)];
            })
            if((currRow===currCol)){
                this.p2CrossL.forEach((val,index)=>{
                    this.p2CrossL[index]=[index,index]
                })
            }
            if((currRow+currCol === cell-1)){ 
            this.p2CrossR.forEach((val,index)=>{
                    this.p2CrossR[index]=[index,cell-1-index]
                })

            }
            
            
        }

    

    }
    winCheck(){
        const{currentPlayer} =this;
        if(currentPlayer=="p1"){
            let tempRow =this.p1RowNeighbour.every(row =>{
                return this.player1[row[0]][row[1]]==true;})
            let tempCol =this.p1ColNeighbour.every(row =>{
                return this.player1[row[0]][row[1]]==true;})
            
            
            if(tempRow){
                this.showWin(this.p1RowNeighbour);
                return true;
            }else if(tempCol){
                this.showWin(this.p1ColNeighbour);
                return true;

            }else if(!this.p1CrossL.includes(null)){
                let tempCrossL=this.p1CrossL.every(row =>{
                    return this.player1[row[0]][row[1]]==true;})
                if(tempCrossL){
                    this.showWin(this.p1CrossL)
                    return true;
                }    
            }else if(!this.p1CrossR.includes(null)){
                let tempCrossR=this.p1CrossR.every(row =>{
                    return this.player1[row[0]][row[1]]==true;})
                if(tempCrossR){
                    this.showWin(this.p1CrossR)
                    return true;
                }    
            }
        }else
        {
            let tempRow =this.p2RowNeighbour.every(row =>{
                return this.player2[row[0]][row[1]]==true;})
            let tempCol =this.p2ColNeighbour.every(row =>{
                return this.player2[row[0]][row[1]]==true;})
            
            
            if(tempRow){
                this.showWin(this.p2RowNeighbour);
                return true;
            }else if(tempCol){
                this.showWin(this.p2ColNeighbour);
                return true;

            }else if(!this.p2CrossL.includes(null)){
                let tempCrossL=this.p2CrossL.every(row =>{
                    return this.player2[row[0]][row[1]]==true;})
                if(tempCrossL){
                    this.showWin(this.p2CrossL)
                    return true;
                }    
            }else if(!this.p2CrossR.includes(null)){
                let tempCrossR=this.p2CrossR.every(row =>{
                    return this.player2[row[0]][row[1]]==true;})
                if(tempCrossR){
                    this.showWin(this.p2CrossR)
                    return true;
                }

            }

        }
        return false;
    }

    showWin(val){
        val.forEach((j)=>{
           
                let element = document.querySelector(`.entries${j[0]}${j[1]}`);
                element.style.background="green"
                
            })
        

    }

    gameReset(){
        this.root.hidden=false;
        this.root.innerHTML=" ";
        this.count=0;
        this.player1Text = "X";
        this.player2Text = "0";
       
        this.table = this.multiArrayMaker(this.cell);
        this.player1 = this.multiArrayMaker(this.cell);
        this.player2 = this.multiArrayMaker(this.cell);
        this.p1RowNeighbour = this.singleArrayMaker(this.cell);
        this.p2RowNeighbour = this.singleArrayMaker(this.cell);
        this.p1ColNeighbour = this.singleArrayMaker(this.cell);
        this.p2ColNeighbour = this.singleArrayMaker(this.cell);
        this.p1CrossL=this.singleArrayMaker(this.cell);
        this.p2CrossR=this.singleArrayMaker(this.cell);
        this.p1CrossR=this.singleArrayMaker(this.cell);
        this.p2CrossL=this.singleArrayMaker(this.cell);
        this.initialize();

    }
}


const game = document.querySelector(".game");
const game1 = new xoGame(game,5);
