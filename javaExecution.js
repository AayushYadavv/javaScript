// const newArray = ['aayush','yadav','is','best'];
// newArray.push('DON');
// newArray.U

// for(let i = 0;i <=10;i++)
// {
//     console.log(newArray[i])
// }


// for(let val of newArray)
// {
//     console.log(val)
// }
// let i = 0;
// while(i<=4)
// {
//     console.log(newArray[i]);
//     i++;
// }

//object

// const PROP = {
//     height : 56,
//     weight : 78,
//     age : 12
// };

// for(p in PROP)
// {
// console.log(p,PROP[p]);
// }


//passwordValidator
// function isValidPassword(password,username){
//     if(password.length >= 8 && !(password.includes(username)) 
//     && !(password.includes(' ')))
//     {
//         return true;
//     }
//     return false;
   
// }

// average
// function average(values){
//     let sum = 0;
//     for (let subVal of values){
//         sum += subVal ;  
//      }
//     return sum/values.length;
// }

// function isPangram(str)
// {   for (let i = 65 ; i<= 90 ; i++)
//     {
//     if (!(str.includes(String.fromCharCode(i+32)))
//     && !(str.includes(String.fromCharCode(i))))
//     {
//        return false;
//         // console.log(String.fromCharCode(i));
//     }
    
//     }
//     return true;
// }
// function isPangram(str)
// {
//     for (char of 'abcdefghijklmnopqrstvwxyz')
//     {
//         if (!(str.includes(char)))
//         {
//             return false;
//         }
//     }
//     return true;
// }

// function getCard(){
//     const cardValue = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
//     const suits = ['clubs','spades','hearts','diamonds'];

//     let randomValue = Math.floor(Math.random() * 13);
//     let randomSuit = Math.floor(Math.random() * 4);

//     const randomCard = {};
//     randomCard['Value'] = cardValue[randomValue];
//     randomCard['Suit']  = suits[randomSuit];

//     return randomCard;
// }

//High Order Functions
// function isAgeBetween(x,y){
//     return function(z){
//         if(z>x && z<y){
//             return true;
//         }
//         return false;
//     }
// }

// const isChild = isAgeBetween(20,70);

// array methods MAP and forEach

// let names = ['aayush','yadav','is','best'];

// let capNames = names.forEach(function(name,ind){
//     console.log(name.toUpperCase(),ind);
// })

// let capNames1 = names.map(function(name){
//     return name.toUpperCase();
// })

// //REST
// const capNam = (...nam) => {
//     const Cap = nam.map( x => x.toUpperCase())
//     return Cap ;
//     }

// //Spread
// capNam(...names);

// evolution of functions

//1. Normal Functions

// function multiply(x,y)
// {
//     return (x*y);
// }

// multiply(1,2);

//2. Function expresions
// const multi = function (x,y)
// {
//     return x*y;
// }

//3. normal Arrow Functions
// const multi = (x,y) => { return x*y }

//4.  Arrow Functions with implicit return
// const multi = (x,y) => (x*y)


///ARRAY IMPORTANT METHODS
//1.forEach

// let names = ['aayush','yadav','is','best','is','is'];

// const capN = names.forEach( x => console.log(x.toUpperCase()))

// // 2. map
// const capNM = names.map( x => (x.toUpperCase()))
// // 3. filter
// const capF = names.filter(x => x==='aayush' || x ==='is')
// // 4.find
// const capFi = names.find( x => x==='is')
// // 5.reduce
// const Count = names.reduce((total, current) =>
// { if (current === 'is')
// {
//     return total+1;
// }
// return total;

// },0);

// // 6 .Every
// const capEvery = names.every( x => x.length === 3);
// // 7. some
// const capSome = names.some( x => x.length === 2);

// DECK OF CARDS


// const newDeck = {
//     deck : [],
//     openCard :[],
//     value :['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
//     suits : ['clubs','spades','hearts','diamonds'],
//     deckInitializer(){
//         for(value of this.value){
//             for (suits of this.suits)
//             {
//                 this.deck.push({
//                     value,
//                     suits
//                 })
//             }
//         }
//     },
//     remove1card(){
//         const {deck,openCard,value,suits} = this;
//         let removed = deck.pop();
//         openCard.push(removed);
//         return removed;
//     },
//     shuffle(){
//         const {deck,openCard,value,suits} = this;

//         console.log(deck.length);
        
//         for ( let i = deck.length - 1 ; i>0 ; i--)
//         {   console.log(i);
//             let j = Math.floor(Math.random() * (i-1) );
//              console.log(j);

//             let temp = deck[i];
//             deck[i] = deck[j];
//             deck[j] = temp;
//         }
//     }


// }

// const PROP = {
//     height : 56,
//     weight : 78,
//     age : 12
// };

// const name = `${PROP.height}`


///// Dom manipuation Basketball score

// const warriorsGames = [{
//     awayTeam: {
//       team: 'Golden State',
//       points: 119,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 106,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 105,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 127,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 126,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 85,
//       isWinner: false
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 92,
//       isWinner: false
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 95,
//       isWinner: true
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 94,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 98,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 115,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 86,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 101,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 92,
//       isWinner: false
//     }
//   }
// ]



// const chartGen = (gameData,presTeam) =>
// {
//     const parentUl = document.createElement('ul');

//     for(team of gameData)
//     {    const li = document.createElement('li');
//         li.innerHTML = getText(team);
//         let classCOLOR = colorSelector(team,presTeam);
//         li.classList.add(`${classCOLOR}`)
//         parentUl.append(li);
//      }
//      return parentUl ;
// }

// const getText = ({homeTeam,awayTeam}) =>{
//         const {team:hTeam,points:hPoints}= homeTeam; 
//         const {team:aTeam,points:aPoints}= awayTeam; 
       
//         let teamNames = `${aTeam} @ ${hTeam}`;
//         let teamScores ;
//         if(hPoints > aPoints)
//         {
//             teamScores = `${aPoints} - <b>${hPoints}</b>`
//             }else{
//             teamScores = `<b>${aPoints}</b> - ${hPoints}`
//              }

//     return `${teamNames} ${teamScores}`;

// }

// const colorSelector = ({homeTeam,awayTeam},presTeam) =>{
//     const {team:hTeam,points:hPoints}= homeTeam; 
//     const {team:aTeam,points:aPoints}= awayTeam; 
//     if(hPoints> aPoints)
//         {
//             if (hTeam ===`${presTeam}`){
//                 return 'win';
//             }else{
//                 return 'loss';
//             }
//         }else{
//             if (aTeam ===`${presTeam}`){
//                 return 'win';
//             }else{
//                 return 'loss';
//             }

//         }

// }

// const chart1 = chartGen(warriorsGames,'Houston');
// document.body.append(chart1);

// const chart2 = chartGen(warriorsGames,'Golden State');
// document.body.append(chart2);

// to-do list

// const section = document.querySelector('section');
// const input = document.createElement('input');
// input.setAttribute("placeholder","TO-DO list");
// section.appendChild(input);

// const remove = function (e) {
// const parent = this.parentElement;
// //   document.remove(parent);
// parent.remove();
// }
// const addElement = function (e){

//   if(e.key === "Enter")
//   {
// const li = document.createElement('li');
// const button = document.createElement('button');
// li.innerText = this.value;
// button.innerText = 'x';
// li.appendChild(button);
// button.addEventListener('click',remove)
// section.appendChild(li);
// this.value="";
//   }

// }



input.addEventListener('keypress',addElement);

*********************
COIN Game
************************

const man = document.querySelector('#man');
const coin = document.querySelector('#coin');
const points = document.querySelector('#points');
var time;

window.addEventListener('keydown', function (e){
 // console.log(e);

if(e.key ==="ArrowDown")
{
clearInterval(time);
time = setInterval(moveV,100,man,50);
// moveV(man,50);
}
else if(e.key ==="ArrowUp")
{   clearInterval(time);
time= setInterval(moveV,100,man,-50);
}
else if(e.key ==="ArrowLeft")
{
    clearInterval(time);
 time =  setInterval(moveH,100,man,-50);
man.style.transform = 'scale(-1,1)';
}
else if(e.key ==="ArrowRight")
{
    clearInterval(time);
    time = setInterval(moveH,100,man,50);
 man.style.transform = 'scale(1,1)';

}


})

const isTouching = (e1,e2)=>{
    const A = e1.getBoundingClientRect();
    const B = e2.getBoundingClientRect();

    // return !((A.left >= B.left + B.width )||
    //         (A.top >= B.top + B.height )||
    //         (B.left >= A.left + A.width )||
    //         (B.top >= A.top + A.height )
    //         )
        return (((B.x -50)<A.x  && A.x<(B.x+50))
        && ((B.y -50)<A.y && A.y <(B.y+50)) );

}

const moveV = function (element,amount){
    if(isTouching(man,coin)){
        pointsUpdate();
    }

    let hM = parseInt(extractVal(element.style.top));
    hM += amount;
    element.style.top = `${hM}px`
    
}
const moveH = function (element,amount){
    if(isTouching(man,coin)){
        pointsUpdate();
        
    }

    let hM = parseInt(extractVal(element.style.left));
    hM += amount;
    element.style.left = `${hM}px`
    
}

const extractVal = (height) => {
    if(height === "")
    {return 100;}
    else{
        return height.slice(0,-2);
    }

}

const colorChange = () =>{
    const color = ['red','violet','indigo','blue','green','yellow','orange']

    const colorNo = Math.floor(Math.random() * 7);

    document.bgColor = color[colorNo];
}

const pointsUpdate = () =>{
        const hCoin = window.innerHeight-50;
        const wCoin = window.innerWidth-50;
    
        const rH = Math.floor(Math.random() * hCoin);
        const rW = Math.floor(Math.random() * wCoin);
    
        coin.style.top = `${rH}px`
        coin.style.left = `${rW}px`
    
        colorChange();
    
        let point = parseInt(points.innerText);
        // this.console.log(point) 
        point += 1;
        points.innerText = point;
    
}
const moveObj = (element,amount) =>{

}





class Card {
    constructor(name)
    {   this.name = name;
        this.deck = []
        this.initialise();
        this.removedCards = []
    }

    initialise(){
       // console.log(deck);
       const {deck} = this;

        const cardNames = ['Spades','Diamonds','Hearts','Clubs'];
        const cardVals = ['A','K','Q','J',2,3,4,5,6,7,8,9,10]

        for (let cardName of cardNames){
            for (let cardVal of cardVals){
                deck.push({val : cardVal , 
                    name : cardName});
            }
        }
    }
    shuffle(){
    const {deck} = this;
    for(let i =deck.length-1;i > 0;i--){
        let randCardNo = Math.floor(Math.random() * i)
        let temp = deck[i];
        deck[i] = deck[randCardNo];
        deck[randCardNo] = temp;

    }    
    

    }

    remove(){
        const {deck,removedCards} = this;
        const rCard = deck.pop()
        removedCards.push(rCard);
    }

    }
