console.log("karishma");

const  conteEle = document.getElementsByClassName('container');
console.log(conteEle);
const leadEle = document.getElementById('loading-bar');
console.log("leadElam", leadEle);
const labelElem = document.getElementById('label');

let width = 0;

setInterval(() => {
  if(width < 100) {
    width = width + 1;
    labelElem.textContent = `${width}%`; 
    leadEle.style.width = `${width}%`
   console.log(width);
  }
},100);


