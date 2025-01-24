"use strict";
// DEclaring a function
function nameOffunction() {
    //function body
}
function greet() {
    console.log(`Hello world`);
}
// function calling
greet();
// Declaring a funct with parameters
function greetWithParameters(name) {
    console.log(`Hello there ${name}`);
}
greetWithParameters("Ali");
//Function with Return statement
function abc() {
    console.log(`This is abc function`);
    return 20;
    console.log(`Aera ghera`);
}
const a = abc();
console.log(" ~ a function ", a);
// Arrays
// let , const array.Name=[];
let fruit0 = 'Apple';
let fruit1 = 'Orange';
let fruit2 = 'Banana';
const fruits = ['Apples', 'Oranges', 'Bananas'];
console.log(fruits);
//Print Array values : arrayName[index]
console.log(fruits[0]);
console.log(fruits[1]);
//Array methods
//1. push(adds) add at the end
const aa = fruits.push('Mangoes');
console.log(fruits);
console.log(aa); // fruits.push returns length of an array
//2. Pop(deletes) deletes at the end
const bb = fruits.pop();
console.log(fruits);
console.log(bb); // fruits.pop returns the value deleted at the end of an array
//3. Unshift(adds) adds at the start
const cc = fruits.unshift('Cherries');
console.log(fruits);
console.log(cc); // stores new length of array
//4. shift(deletes) removes from the start
fruits.shift();
console.log(fruits);
const fruits1 = ['Apples', 'Oranges', 'Bananas', 'Apples1', 'Bananas1', 'Oranges1'];
//3. Splice adds and/or remove from a specific index  but also manipulates original array 
fruits1.splice(1, 0, 'cherries');
console.log(fruits1);
const dd = fruits1.splice(1, 6, 'Watermelons');
console.log(fruits1);
console.log(dd); //splice method in itself returns an array with deleted value
//4. Slice "Selects" elements from specific index & makes it into a new array but does not manipulate original array.
const a1 = fruits1.slice(1);
console.log(fruits1);
console.log(a1);
