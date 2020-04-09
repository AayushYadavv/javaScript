const inputTime = document.querySelector('#timerValue');
const startTime = document.querySelector('#start');
const pauseTime = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r')* Math.PI * 2



const timer1 =new Timer(inputTime,startTime,pauseTime,{
    onStart(){
     
        circle.setAttribute('stroke-dasharray',perimeter)
      
      
    },
    onTick(temp){
        
        circle.setAttribute('stroke-dashoffset',(perimeter*temp)- perimeter)
        console.log((perimeter*temp)- perimeter)

    },
    onComplete(){
        console.log('timerCompleted');
        circle.setAttribute('stroke-dasharray',perimeter)
        circle.setAttribute('stroke-dashoffset',0)
        
    }
});