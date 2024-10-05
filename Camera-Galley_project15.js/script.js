console.log("karishma");


let video = document.querySelector("video");
console.log(video);

// Correcting the class selectors (added ".")
let recordBtnCont = document.querySelector(".record-btn-cont");
console.log("recordBtnCont" + " " + recordBtnCont);

let recordBtn = document.querySelector(".record-btn");
console.log("recordBtn" + " " + recordBtn);

let captureBtnCont = document.querySelector(".capture-btn-cont");
console.log("captureBtnCont" + " " + captureBtnCont);

let captureBtn = document.querySelector(".capture-btn");
console.log("captureBtn" + " " + captureBtn);

let startVideo = {
    video: true,
    audio: true
};
let recorder;
let isRecording = false;

// Corrected typo: "navigator" (not "navigaor")
navigator.mediaDevices.getUserMedia(startVideo)
    .then((stream) => {
        console.log(video.srcObject = stream);

        recorder = new MediaRecorder(stream);
        console.log(recorder);
        

        
        recordBtnCont.addEventListener('click', (e) => {
            if (!recorder) return;

            if (!isRecording) {
                recorder.start();
                console.log("Recording started");
                isRecording = true; 
                recordBtn.classList.add("scale-recoder");
            } else {
                recorder.stop();
                console.log("Recording stopped");
                isRecording = false; 
                recordBtn.classList.remove("scale-recoder");
            }
        });
    })
    .catch((error) => {
        console.error("Error accessing media devices.", error);
    });
