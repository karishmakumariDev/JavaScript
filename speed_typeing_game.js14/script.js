const randomElem = document.getElementById('rendomText');
console.log("randomElem: ", randomElem);

const textInputEle = document.getElementById('textInput');
console.log("textInputEle: ", textInputEle);

const resutEle = document.getElementById('resut');
console.log("resutEle: ", resutEle);

const btn = document.getElementById('btn');
console.log("btn: ", btn);

let startTime;
let endTime;

let text = [
    "Life changes very quickly, in a very positive way, if you let it.",
    "Everything you've ever wanted is sitting on the other side of fear.",
    "Life is not about finding yourself"
];

const myFun = () => {
    let wordLen = textInputEle.value.trim().split(" ").length; 
    let time = new Date();
    endTime = time.getTime();
    let totalTime = Math.floor((endTime - startTime) / 1000);
    let speed = Math.floor((wordLen / totalTime) * 60); 
    console.log("Speed: ", speed);
    resutEle.innerHTML = `You typed ${wordLen} words in ${totalTime} seconds. Speed: ${speed} words per minute.`;
}

btn.addEventListener('click', () => {
    if (btn.innerHTML === "Start") { 
        btn.innerHTML = "Done"; 
        console.log("btn.innerHTML: ", btn.innerHTML);
        textInputEle.disabled = false;
        const randomNum = Math.floor(Math.random() * text.length);
        randomElem.innerHTML = text[randomNum]; 
        console.log("Random text: ", text[randomNum]);
        
        let time = new Date();
        startTime = time.getTime(); 
        console.log("Start time: ", startTime);
    } else {
        btn.innerHTML = "Start"; 
        textInputEle.disabled = true; 
        console.log("Typing finished");

        
        myFun();
    }
});
