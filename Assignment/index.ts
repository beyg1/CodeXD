let greeting:string;
greeting = "Hello, World!"
console.log(greeting); // problem 1
let num1:number = 1;
let num2:number = 2;
console.log(`sum of ${num1} and ${num2} is: ${num1 + num2}`); // Arithmetic operator for addition
num1 - num2;
num1 * num2;
num1 / num2; // problem 2
let a = 1;
let b = 2;
a = a * b; //a=2
b = a / b; // b=1 swapping the value of b with a 
a = a / b; // a=2 problem #3
let message:string;
//message = 5; // compiling error cannot assign number value to string problem 4 
console.log(`The remainder of ${num1} & ${num2} is ${num1%num2}`); // problem 5
let counter = 0;
counter = counter + 1;
counter += 1;
counter++; // problem 6
let aa = true; let bb = false; let cc = true;
aa && bb && cc; // AndGate  false
aa || bb || cc ;// OrGate true
!aa; !bb; !cc; // NotGate problem7
let num = 10;
num += 1;
num -= 1;
num *= 1;
num /= 1; //problem 8
let numX = 0;
if(numX % 2 == 0){
    console.log(`${numX} is an even number.`)
}
else {
    console.log(`${numX} is an odd number.`)
} // problem 9
let age:number;
let currentYear = 2024;
let birthYear = 2014;
age = currentYear - birthYear;
if(age >= 18){
    console.log(`Yes. You are eligible for vote`)
}
else {
    console.log(`Sorry. you are not eligible to vote yet.`)
}// problem 10
let score:number = 88;
let grade:string;
grade = score >= 90 ? "Your Grade is A":
        score >= 80 ? "Your Grade is B":
        score >= 70 ? "Your Grade is C":
        score >= 60 ? "Your Grade is D": "Your Grade is F";
console.log(grade); //problem 11        
let x = 24; let y = 14; let z = -45;
if(x > y && x > z){
    console.log(`${x} is the greater number`)
}
else if(y > x && y > z){
    console.log(`${y} is the greater number`)
}  
else{
    console.log(`${z} is the greater number`)
}// problem 12
let leapYear:boolean;
let Year = 2020;
leapYear = (Year%4 == 0) && (Year%100 != 0 || Year%400 == 0)
if (leapYear == true){
    console.log(`${Year} is a leap year.`)
}
else{
    console.log(`${Year} is not a leap year`)
}//problem 13
let tempCelcius;
let tempFahrenheit = 68;
tempCelcius = (tempFahrenheit - 32) * 5 / 9;
console.log(`Temperature in degree Celsius is ${tempCelcius}`);// problem 14
let numberX = 0;
if (numberX > 0){
    console.log(`${numberX} is a positive number.`)
}
else if(numberX<0){
    console.log(`${numberX} is a negative number`)
}
else{
    console.log("The number is 0")
}
// problem 15
let numY = 8;
console.log(`${numY} X 1 = ${numY*1}`);
console.log(`${numY} X 2 = ${numY*2}`);
console.log(`${numY} X 3 = ${numY*3}`);
console.log(`${numY} X 4 = ${numY*4}`);
console.log(`${numY} X 5 = ${numY*5}`);
console.log(`${numY} X 6 = ${numY*6}`);
console.log(`${numY} X 7 = ${numY*7}`);
console.log(`${numY} X 8 = ${numY*8}`);
console.log(`${numY} X 9 = ${numY*9}`);
console.log(`${numY} X 10 = ${numY*10}`);