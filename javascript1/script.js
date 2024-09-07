// add tow numbr

// const addNumber = (num1, num2) => {
//     console.log(num1 + num2); 

// }

// addNumber(2, 3);

// function getFactorial(num) {
//     let ans = 1;
//     for(let i = 1; i <= num; i++) {
//         ans *= i;
//     }
//     return ans;
// }

// console.log(getFactorial(5));


//add two numbaer
// let num1 = 10;
// let num2 = 20;

// let totalSum = num1 + num2;
// console.log(totalSum);

//add two numbaer
// var num1 = 10;
// var num2 = 20;

// var totalSum = num1 + num2;
// console.log(totalSum);


// multiply two number
// var num1 = 30;  
// var num2 = 10;
// console.log(num1 * num2);


// comparison command
// let num1 = 5;
// let num2 = 10;
// console.log(num1 > 10);
// console.log(num1 < num2);
// console.log(num1 != num2);
// console.log(num1 == num2);




// console.log(5 == '5');   
// console.log(5 === '5'); 
// console.log(10 != '10');
// console.log(10 !== '10'); 
// console.log(15 > 10);
// console.log(20 >= 20);
// console.log(8 <= 10);
// console.log(NaN == NaN);
// console.log(undefined == null);


// function declared in javaScript
// function => A function declaration a define a name and can be use before it's declared a funtion hosting.
// function greet() {
//     console.log("Hello World");
// }
// greet();// colling function;

// function Expretion
// A function expression defines a function as part of an expression. It is not hoisted, so it cannot be called before it is defined.
//  let greet = function() {
//  console.log("hello wolrd");
//  }
// greet();

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));  // Output: 120

// function sum() {
//     let totalSum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         totalSum += arguments[i];
//     }
//     return totalSum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));  // Output: 21


// function displayNum([first,second,third]) {
//  console.log(first,second,third);
// }
// let num = [1,2,3];
// displayNum(num);

// function displayNumbers(numbers) {
//     numbers.forEach(num => console.log(num));
// }
// let nums = [1, 2, 3];
// displayNumbers(nums);

// chack prime numaber


//  1. How do you declare an array in JavaScript?
// let arr1 = [1, 2, 3];
// let arr2 = new Array(1, 2, 3);

// 2 .how do you acces element in javaScript
// let arr = [1,2,3];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// how do you find the lenth;
// let Array = [1,2,3,4,4,5,6,7];
// console.log(Array.length);


// 3 .how do you itrate through in array

//  let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.forEach(element => console.log(element));
// for(let element of arr) {
//     console.log(element)
// }


// 4. print Array in javascript
// var arra = [1,2,3,4,5,6,7,8];
// console.log(arra);
// let myArra = [1, 2, 3, 4, 5];
// console.log(myArra);


//  5. Array traversal in javascript
// var array = [2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);  
// }
// let myArray = [1, 2, 3, 4, 5];
// myArray.forEach(element => {
//     console.log(element);
//   });

// how do you add and remove an array
// push(): Adds an element to the end of an array.
// pop(): Removes the last element from an array.
// unshift(): Adds an element to the beginning of an array.
// shift(): Removes the first element from an array.
// example
// let Array = [1,2,3];
// Array.push(4);
// console.log(Array);
// Array.pop()
// console.log(Array);
// Array.unshift(0);
// console.log(Array);
// Array.shift();
// console.log(Array);


// how do you convert an array to a string?
// you can use toString() and join() to caonvert an array to a string.
// let Array = [1,2,3,4];
// console.log(Array.toString());
// console.log(Array.join('-'));

//how do you marge two array?
// let Array = [1,2,3,4];
// let Array2 = [5,6,7];
// console.log(Array.concat(Array2));

// how do find an array of index?
// Use the indexOf(), find(), or findIndex() methods.
// let Array = [1,2,3,4];
// console.log(Array.indexOf(4));
// console.log(Array.find(num => num > 3)); 
// console.log(Array.findIndex(num => num > 2));  

// how do you filter an array in javascript
// use the filter method to return a new array with element match a condition.
// let Array = [1,2,3,4,7,9];
// let filtered = Array.filter(num => num <= 3); 
// console.log(filtered);

// how do you sort an Array?
// let Array = [1,2,5,8,9,3,4]; 
// Array.sort();
// console.log(Array); // [1,2,3,4,5,6,7,8,9]


// how do you remove an Array in javaScrpt?
// let arr = [1, 2, 2, 3, 4, 4];
// let uniqueArray = [...new Set(arr)];  //[1,2,3,4]
// console.log(uniqueArray);


// how do you reverse an array
// let Array = [1,2,3];
// Array.reverse();
// console.log(Array);// [3,2,1]

// how do you map over an array?
// use the 'map()' method to apply a function to each element and a return a new array
// let Array = [1,2,3,4];
// let doubled = Array.map(element => element *2);
// console.log(doubled);

// How do you reduce an array to a single value?
// Use the reduce() method to reduce the array to a single value based on the provided function.
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((accumulator, currValue) => accumulator + currValue, 0);  // Output: 10
// console.log(sum);

// Basic Example of map():
// let numbers = [1, 2, 3, 4, 5];

// // Multiply each number by 2
// let doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
// console.log(numbers);         // Original array remains unchanged: [1, 2, 3, 4, 5]


// using Arrow fountion
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]


// let people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// let names = people.map(person => person.name);
// console.log(names);  // Output: ["Alice", "Bob", "Charlie"]

// Chaining with Other Methods:
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers
//     .map(number => number * 2)//[2,4,6,8,10]
//     .filter(number => number > 5);//[2,4,6,8,10] > 5 = [6,8,10]
// console.log(result);  // Output: [6, 8, 10]

// let array = [1,2,3,4]; 
// let result = array.map(arr => arr*2).filter(arr => arr > 5);
// console.log(result);


// const num = 20;
// var fact = 1;

// for(let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

// function normalfun(callbackFun) {
//     callbackFun();
// }

// normalfun(function(){
//     console.log("manish");
// });


// let fun = (num) => {
//     return num % 2 !== 0;
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let oddFilter = arr.filter((num) => {
//     console.log(num);
// });

// console.log("odd ", oddFilter);

// function myFun(num1, num2) {
//     return num1 + num2;
// }

// const myFun = (num1, num2) => {
//     return num1 + num2;
// }

// const myFun = (num1) => {
//     return num1;
// }

// const myFun = (num1, num2 ) => {
//     let sum = num1 + num2; 
//     return sum
// };

// for(let i = 0; i < n; i++) {
//     let ans = [];
//     if(arr[i] % 2 !== 0) {
//         ans.push(arr[i]);
//     }
//     return ans;
// }

// map function example

// let Array = [1, 2, 3, 4, 5];
// let addedNumbers = Array.map(num => num % 2 != 0);
// console.log(addedNumbers);


// let Arr = [1, 2, 3, 4, 5];
// let isEven = Arr.map(num => num % 2 === 0);
// console.log(isEven);

// let arr = [1,2,3,4,5];
// let totalSum = 0;
// for(let i = 0; i < arr.length; i++) {
//     totalSum += arr[i];
// }
// console.log(totalSum);

// let Array = [1,2,3,4,5];
// let multiply = 1;
// for(let i = 0; i < Array.length; i++) {
//  multiply *= Array[i];
// }
// console.log(multiply);

// reduce method
// let Array = [1,2,3,4];
//  let sum = Array.reduce(a,b,index,Array) => {
//     return a += b;
// }
// console.log(sum);



// function greeting(name) {
//     console.log("Hello, " + name);
// }

// function processUserInput(callback, num) {
//     const name = prompt("Please enter your name.");
//     console.log(callback);
//     callback(name);
// }
// greeting("manish");
// processUserInput(greeting, 5);


// Array.filter();


// variable and funtion
// var x = 9;
// function getName() {
//     console.log("karishma");
// }
// getName();
// console.log(x);
// console.log(getName);
// output:
// karishma
// 10
// function getName() {
//     console.log("karishma");
// }


// getName();
// console.log(x);
// console.log(getName);

// var x = 9;
// function getName() {
//     console.log("karishma");
// }
// karishma
// undifind
// function getName() {
//     console.log("karishma");
// }


// getName();
// console.log(x);
// console.log(getName);


// function getName() {
//     console.log("karishma");
//}
// output
// karishma
// error throw
// function getName() {
//     console.log("karishma");
// }


// getName();
// console.log(x);
// console.log(getName);


// function getName() {
//     console.log("karishma");
//}
// output
// karishma
// error throw
// function getName() {
//     console.log("karishma");
// }



// getName();
// console.log(x);
// console.log(getName);


// function getName() {
//     console.log("karishma");
//}
// output
// karishma
// error throw
// function getName() {
//     console.log("karishma");
// }



// getName();  
// console.log(x);  
// console.log(getName());
// var x = 9;  
// function getName2() {
    
// }
// var getName = () => {
//     console.log("Karisma");
// };

// var x = 9;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b(){
//  var x = 8;
//  console.log(x);
// }

 


