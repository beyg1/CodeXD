"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.sum = exports.obj = exports.array = exports.abc = void 0;
let a = 50; // Node modules
exports.default = a; // npm init -y (for packagr.json file)
// npm i @types/node -D (for package-lock.json )      
const abc = "abc"; // npm install inquirer (to get input from user in terminal )
exports.abc = abc;
// For all of them to work configure in tsconfig file:  "target" : "ES2020" &&  "module" : "NodeNext"                                             
let array = [1, 2, 3];
exports.array = array;
const obj = {
    name: "John",
};
exports.obj = obj;
function sum() {
    console.log("This is Sum Function");
}
exports.sum = sum;
function subtract() {
    console.log("This is Sum Function");
}
exports.subtract = subtract;
