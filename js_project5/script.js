const billElem = document.getElementById('bill');
const tipElem = document.getElementById('tip');
const totalAmount = document.getElementById('total');
const calculate = document.querySelector(".button");
console.log("billElem", billElem);
console.log("tipElem ", tipElem );

console.log('totalAmount', totalAmount);

calculate.addEventListener('click',()=> {
   const billValue = parseInt(billElem.value);
   console.log(billValue);
   const tipValue = parseInt(tipElem.value);
   console.log(tipValue);

   const pr = (billValue * tipValue) / 100;
   console.log(pr);
   const total  = billValue + pr;
   
   totalAmount.innerHTML = total; 
   console.log(total);
});