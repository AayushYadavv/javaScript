
const playAgain=()=>{



    World.add(world,[Bodies.rectangle(width/2, 0,width , 1,{isStatic : true}),
                     Bodies.rectangle(width/2, height,width , 1,{isStatic : true}),
                     Bodies.rectangle(0, height/2,1 , height,{isStatic : true}),
                     Bodies.rectangle(width, height/2,1,height,{isStatic : true})
                    ]);
       // World.clear(world,true)
        
    
    
    
    //Declaring the Grid array
    const grid = Array(cellY).fill(null);
    grid.forEach((val,index)=>{
        grid[index] = Array(cellX).fill(false);
    });
    
    //Declaring the verical walls and initializing to false
    const verticals = Array(cellY).fill(null);
    verticals.forEach((val,index)=>{
        verticals[index]=Array(cellX-1).fill(false);
    })
    
    //Declaring Horizontal walls and initialising to false
    const horizontals = Array(cellY-1).fill(null);
    horizontals.forEach((val,index)=>{
        horizontals[index]=Array(cellX).fill(false);
    })
    
    
    //Selecting a random coordinate from the grid to start on
    const randomX = Math.floor(Math.random() * cellY);
    const randomY = Math.floor(Math.random()* cellX);
    // console.log(randomX,randomY);
    
    
    
    //function for making grid array ,verticals and horizontals after the tracing
    const startMovement = (row, column) =>{
    
        //check for visited or not
        if(grid[row][column]){
            return;
        }
    //mark visited if not visited
        grid[row][column]= true;
    
    //getting neighbours
    const neighbours = shuffle([
        [row-1,column,"top"],
        [row+1,column,"below"],
        [row,column-1,"left"],
        [row,column+1,"right"]
    ]);
    
    
    
    ///iterating over each neighbour
    for(let neighbour of neighbours){
        const [rowN,columnN,position]= neighbour;
    
    
    
          //check for valid neighbour
          if(rowN<0 || columnN<0 || rowN>cellY-1 || columnN>cellX-1){
            continue;
        }
       
        //if neighbour is visited continue the loop
        if(grid[rowN][columnN])
        {
            continue;
        }
    
      
    
        //changing val of veticals and horizontals
        if(position==="top"){
            horizontals[row-1][column]= true;
        }else if(position === "below"){
            horizontals[row][column]= true;
        }else if(position==="left"){
            verticals[row][column-1]= true;
        }else if(position==="right"){
            verticals[row][column]=true;
        }
    
        startMovement(rowN,columnN);
    }
    }
    startMovement(randomX,randomY);
    let edgeLengthX = width/cellX;
    let edgeLengthY = height/cellY;
    
    verticals.forEach((val,index1)=>{
        val.forEach((open,index2)=>{
            if(open){
                return;
            }
            
            World.add(world,Bodies.rectangle((index2+1)*edgeLengthX,((index1*edgeLengthY)+(edgeLengthY/2)),3,edgeLengthY,{
                isStatic :true,
                label :"wall",
                render:{
                    fillStyle:'red'
                }
            })
            )    })
    })
    
    horizontals.forEach((val,index1)=>{
        val.forEach((open,index2)=>{
            if(open){
                return;
            }
            
            World.add(world,Bodies.rectangle(((index2*edgeLengthX)+(edgeLengthX/2)),(index1+1)*edgeLengthY,edgeLengthX,3,{
                isStatic :true,
                label :"wall",
                render:{
                    fillStyle:'red'
                }
                
            })
            )    })
    })
    
    
    // console.log(grid,verticals,horizontals);
    
    //GOAL
    const goal = Bodies.rectangle((cellX-1)*edgeLengthX+edgeLengthX/2,
    (cellY-1)*edgeLengthY+edgeLengthY/2,edgeLengthY*.9,edgeLengthY*.9,{
        
        isStatic:true,
        label:"goal",
        render:{
            fillStyle:'green'
        }
        
    })
    
    World.add(world,goal);
    
    //Ball
    const ball = Bodies.circle(edgeLengthX/2,edgeLengthY/2,edgeLengthY/4,{
        
        render:{
            fillStyle:'yellow'
        }
        
    });
    World.add(world,ball);
    Events.on(engine,'collisionStart',(event)=>{
        event.pairs.forEach((collision)=>{
            label = ["ball","goal"]
            if(label.includes(collision.bodyA.label)&&
            label.includes(collision.bodyA.label)){
              
            world.gravity.y = 1;
            for(let part of world.bodies)
            {
                if(part.label === "wall")
                {
                    Body.setStatic(part,false);
                    winElement.classList.remove("hidden")
                }
            }
            }
    
        })
    })
    
    document.addEventListener('keyup',(event)=>{
        let {x,y}= ball.velocity;
     
        
         if(event.keyCode === 38){
             Body.setVelocity(ball,{
                 x,
                 y:y-5
             })
         }else  if(event.keyCode === 40){
             Body.setVelocity(ball,{
                 x,
                 y:y+5
             })
         }else  if(event.keyCode === 37){
             Body.setVelocity(ball,{
                 x:x-5,
                 y
             })
         }else  if(event.keyCode === 39){
             Body.setVelocity(ball,{
                 x:x+5,
                 y
             })
         
     }})
    }