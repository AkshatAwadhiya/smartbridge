// 1. Declare age and isAdult
let age = 25;
let isAdult = age >= 18; 
console.log("Is Adult:", isAdult); 

// 2. Operations with x and y
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);           
console.log("Multiplication:", multiplication); 
console.log("Modulus:", modulus);             

// 3. Check if a number is even or odd
let n = 7; 
let isEven = (n % 2 === 0);
let result = isEven ? "Even" : "Odd";

console.log(`The number ${n} is ${result}.`); 

// 4. Store numbers from 1 to 5 in an array using a for loop
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Numbers array:", numbers); 

// 5. Function to return square of a number
function square(num) {
  return num * num;
}

console.log("Square of 4:", square(4));