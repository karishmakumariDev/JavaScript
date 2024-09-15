// var clutter = "";

// for(var i = 1; i <= 168; i++) {
//     var rn = Math.floor(Math.random()*10)
//     clutter += `<div class="bubble">${rn}</div>`;
// }

//     document.querySelector("#pbtm").innerHTML = clutter;

document.addEventListener("DOMContentLoaded", function() {
    var clutter = "";

    for(var i = 1; i <= 200; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
});

var timer = 3;
function runTime() {
    var timerint = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
        }
    },1000);
}
runTime();