const { Engine, Render, Runner, World, Bodies,Body , Events} = Matter;

const cellX = 25;
const cellY = 25;

const width=window.innerWidth;
const height =window.innerHeight;

const engine = Engine.create();
engine.world.gravity.y = 0;
const world = engine.world;

const render = Render.create({
    element: document.body,
    engine : engine,
    options :{
        width,
        height,
        wireframes : false,


    }
});

Render.run(render);

const runner = Runner.create();
Runner.run(runner,engine);


//shuffle function to shuffle the neighbour
function shuffle(itemsArray){
    let  count = itemsArray.length-1;
 while(count>0){
 
         randno = Math.floor(Math.random() * itemsArray.length)
         let temp = itemsArray[randno];
         itemsArray[randno]= itemsArray[count];
         itemsArray[count] = temp;
         count--;
 
     }
   
     return itemsArray;
    
 }
 


playAgain();
//adding eventListner in order to move ball


const winElement = document.querySelector(".winner");
const playA  = document.querySelector('#playAgain');
playA.addEventListener('click',()=>{
    Engine.clear(engine);
    World.clear(world,false);
    winElement.classList.add("hidden")
 
    playAgain();
});

