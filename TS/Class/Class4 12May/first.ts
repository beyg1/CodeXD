let a = 50;                       // Node modules
export default a;                 // npm init -y (for packagr.json file)
                                  // npm i @types/node -D (for package-lock.json )      
const abc = "abc";                // npm install inquirer@9.2.23 (to get input from user in terminal )
               // For all of them to work configure in tsconfig file:  "target" : "ES2020" &&  "module" : "NodeNext"                                             
let array = [1, 2, 3];  // add shabang statement on top of main file : #! /usr/bin/env node
 //in package.json add :  1 "type": "module",   2 "bin":"index.js", after main .
const obj = {
  name: "John",
};

function sum() {
  console.log("This is Sum Function");
}

function subtract() {
  console.log("This is Sum Function");
}

export { abc, array, obj, sum, subtract };
