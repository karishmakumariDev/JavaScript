console.log("karishma");

let video = document.querySelector("video");
console.log(video);

let recordBtnCont = document.querySelector(".record-btn-cont");
console.log("recordBtnCont" + " " + recordBtnCont);

let recordBtn = document.querySelector(".record-btn");
console.log("recordBtn" + " " + recordBtn);

let captureBtnCont = document.querySelector(".capture-btn-cont");
console.log("captureBtnCont" + " " + captureBtnCont);

let captureBtn = document.querySelector(".capture-btn");
console.log("captureBtn" + " " + captureBtn);

let transparentColor;

let startVideo = {
    video: true,
    audio: true
};

let chanks = [];
let recorder;
let isRecording = false;

navigator.mediaDevices.getUserMedia(startVideo)
    .then((stream) => {
        console.log(stream);
        video.srcObject = stream;
        video.autoplay = true;  // Added to ensure the video plays automatically

        recorder = new MediaRecorder(stream);
        console.log(recorder);

        recorder.addEventListener("start", (e) => {
            chanks = [];
            startTimer();

        });

        recorder.addEventListener("dataavailable", (e) => {
            chanks.push(e.data);
        });

        recorder.addEventListener("stop", (e) => {
            // Corrected MIME type
            let blob = new Blob(chanks, { type: 'video/mp4' });

            let videoURL = URL.createObjectURL(blob);
            console.log(videoURL);
            let a = document.createElement("a");
            console.log("a:", a)
            a.href = videoURL;
            console.log(" a.href :", a.href);
            a.download = "stream.mp4";
            console.log(" a.download ", a.download);
            a.click();
            stopTimer()
        });
    })
// Record button event listener
recordBtnCont.addEventListener('click', (e) => {
    if (!recorder) return;

    if (!isRecording) {
        recorder.start();
        console.log("Recording start");
        isRecording = true;
        recordBtn.classList.add("scale-recoder");
    } else {
        recorder.stop();
        console.log("Recording stop");
        isRecording = false;
        recordBtn.classList.remove("scale-recoder");
    }
});
let timerId;
let counter = 0;
let timer = document.querySelector(".timer");

function startTimer() {
    function displayTimer() {
        let totalSecond = counter;
        let hr = String(Math.floor(totalSecond / 3600)).padStart(2, '0'); // Hours
        console.log(" hr", hr);
        totalSecond = totalSecond % 3600;
        console.log("totalSecond", totalSecond);
        let min = String(Math.floor(totalSecond / 60)).padStart(2, '0'); // Minute
        console.log("min", min);
        let sec = String(totalSecond % 60).padStart(2, '0'); // Seconds
        console.log("sec", sec);


        timer.innerText = `${hr}:${min}:${sec}`;

        counter++;
    }

    timerId = setInterval(displayTimer, 1000);
}
function stopTimer() {
    clearInterval(timerId);
    timer.innerText = "00:00:00"; // Reset timer to initial state
    counter = 0; // Reset counter
}


captureBtnCont.addEventListener('click', () => {
    let canvas = document.createElement('canvas');


    // Set canvas dimensions to match the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Get the 2D drawing context
    let tool = canvas.getContext('2d');

    // Draw the current video frame onto the canvas
    tool.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    //filtering
    tool.fillStyle = transparentColor
    tool.fillRect(0,0,canvas.width,canvas.height);

    // Convert the canvas to a data URL (image)
    let imageURL = canvas.toDataURL();

    // Create a link (anchor) element to download the image
    let a = document.createElement("a");
    console.log("a:", a);

    a.href = imageURL;  // Use imageURL, not videoURL
    console.log("a.href:", a.href);

    a.download = "image.jpg";  // Set the download filename
    console.log("a.download:", a.download);

    a.click();  // Programmatically trigger the download
});
let filterlayer = document.querySelector(".filter-layer"); // Corrected selector
let allfilters = document.querySelectorAll(".filter");
console.log("allfilters:" + allfilters);

allfilters.forEach((filterEle) => {
    filterEle.addEventListener("click", (e) => {
        transparentColor = getComputedStyle(filterEle).getPropertyValue("background-color");
        filterlayer.style.backgroundColor = transparentColor; // Corrected background-color property
    });
});

