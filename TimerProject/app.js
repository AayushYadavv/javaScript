class Timer{
    constructor(input,start,pause,callback){
        this.input = input;
        this.start = start;
        this.pause = pause;
        this.tRemaining = 30;
        this.totalTime = 0;
        this.pause.disabled= true;
        this.start.addEventListener('click',this.startTimer)
        this.pause.addEventListener('click',this.pauseTimer)
        if(callback){
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
        }
    }

    startTimer= () => {
        if(this.onStart)
        {
            this.onStart();
        }
        this.totalTime = this.input.value;
        this.pause.disabled= false;
        this.start.disabled = true;
        this.input.disabled = true;
        this.tick();
       
        this.interval = setInterval(this.tick,20);
    }
    tick = () => {
      
       
        if(this.input.value <= 0){
            clearInterval(this.interval);
            this.pause.disabled='true'
            this.start.disabled = false;
            this.input.disabled = false;
           
                    if(this.onComplete)
                {
                    this.onComplete();
                }
        }
        else{
            this.tRemaining = parseFloat(this.input.value)-0.02 ;
            this.input.value = this.tRemaining.toFixed(2) ;
            if(this.onTick)
        {  let temp =  (this.input.value/this.totalTime)
            this.onTick(temp);
           
        }
        
        }
        
    }
        pauseTimer = () => {
        this.pause.disabled = true;
        this.start.disabled = false;
        this.input.disabled = false;
        clearInterval(this.interval);
    }
}


