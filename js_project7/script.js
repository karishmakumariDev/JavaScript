const diceEle = document.getElementById('dice');
console.log(diceEle);
const rollbutton = document.getElementById('roll-button');
console.log(rollbutton);
const historyEle = document.getElementById('roll-history');
console.log(historyEle);


const diceArr = ['', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
console.log(diceArr);
let count = 1;

rollbutton.addEventListener('click', () => {




    diceEle.classList.add("rolling");

    setTimeout(() => {
        diceEle.classList.remove("rolling");
        const rollround = Math.floor(Math.random() * 6) + 1;
        console.log(rollround);
        diceEle.textContent = diceArr[rollround]
        const list = document.createElement('li');
        console.log(list);
        list.innerHTML = `Roll ${count++}: <span>${diceArr[rollround]}</span>`;
        console.log(list.innerHTML);
        historyEle.appendChild(list)
    }, 1000); //
    ;
})

