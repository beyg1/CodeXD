#! /usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([{
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
        choices: ['+', '-', '*', '/']
    },
]);
function sum(num1, num2) {
    return Number(num1) + Number(num2);
}
function difference(num1, num2) {
    return num1 - num2;
}
function product(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
questions.num1 = parseFloat(questions.num1.replace(/,/g, ""));
questions.num2 = parseFloat(questions.num2.replace(/,/g, ""));
if (isNaN(questions.num1)) {
    console.log("Invalid number input");
}
else if (isNaN(questions.num2)) {
    console.log("Invalid number input");
}
else if (questions.operator == "+") {
    console.log("Sum of two given numbers:", sum(questions.num1, questions.num2));
}
else if (questions.operator == "-") {
    console.log("Difference of two given numbers:", difference(questions.num1, questions.num2));
}
else if (questions.operator == "*") {
    console.log("Product of two given numbers:", product(questions.num1, questions.num2));
}
else if (questions.operator == "/") {
    console.log("division of two given numbers:", division(questions.num1, questions.num2));
}
