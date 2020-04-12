let timerId;
const debounce = (func) =>{
    return (...arg) => {
        

        if(timerId){
            clearInterval(timerId)
        }
        timerId= setTimeout(()=>{
        func(...arg);},500)
    }

}




