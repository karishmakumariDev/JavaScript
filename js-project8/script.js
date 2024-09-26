const timerEle = document.getElementById('timer');
console.log(timerEle);
const startEle = document.getElementById('start');
console.log(startEle);
const stopEle  = document.getElementById('stop');
console.log(stopEle);
const resetEle = document.getElementById('reset');
console.log(resetEle);

let time = 25*60; // 1500
console.log(time);

function updateTimer(localTime) {
    let minutes = Math.floor(localTime / 60);
    console.log("minut"+minutes);
    let seconds = localTime % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes} : ${seconds}`;
}
console.log(updateTimer());
let intervalId = null;
startEle.addEventListener(('click'), () => {
    if(intervalId !== null) {
        return;
    }
    intervalId = setInterval(()=>{
        timerEle.textContent = updateTimer(time--);
        console.log("time", time);
    }, 1000)

    console.log("intervalId", intervalId);
} )

stopEle.addEventListener(('click'), () => {
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

} )
resetEle.addEventListener(('click'),()=> {
   if(intervalId !== null ) {
    clearInterval(intervalId);
   }
   time = 25 * 60;
   timerEle.textContent = updateTimer(time);
   
})



