#! /usr/bin/env node // Shebang command line for linux and macOS(unix based systems) to tell them to run this script as Node.js script. 
import inquirer from "inquirer";                            // this will make it executionable directly from command line.           
 const questions = await inquirer.prompt([{          //shebang 
    type: "input",  
    name: "num1",
    message: "Enter first number",
 },
 {
    type: "input",
    name: "num2",
    message: "Enter Second number",
 },
 {
    type: "list",
    name: "operator",
    message: "Enter Operator",
    choices:['+','-','*','/']
 },
]);
function sum(num1:number, num2:number) {
    return Number(num1) + Number(num2);
}
function difference(num1:number, num2:number) {
    return num1 - num2;
}
function product(num1:number, num2:number) {
    return num1 * num2;
    
}
function division(num1:number, num2:number) {
    return num1 / num2;
}
if (questions.operator == "+"){
    console.log("Sum of two given numbers:",sum(questions.num1,questions.num2));
}
else if(questions.operator == "-"){
    console.log("Difference of two given numbers:",difference(questions.num1,questions.num2));
}
else if(questions.operator == "*"){
    console.log("Product of two given numbers:",product(questions.num1,questions.num2))
}
else if(questions.operator == "/"){
    console.log("division of two given numbers:",division(questions.num1,questions.num2))
}
else {
    console.log("Invalid Operator")
}