// add tow numbr

const addNumber = (num1, num2) => {
    console.log(num1 + num2);
}

addNumber(2, 3);



function getFactorial(num) {
    let ans = 1;
    for(let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}

console.log(getFactorial(5));