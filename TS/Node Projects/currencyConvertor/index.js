#! /usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([{
        type: "input",
        name: "amount",
        message: "Enter the amount in PKR you want to convert:",
    },
    {
        type: "list",
        name: "currency",
        message: "Select the currency, you want your PKR amount to convert into",
        choices: ["USD", "EUR", "GBP", "JPY"],
    },
]);
function usd(amount) {
    return amount / 280;
}
function eur(amount) {
    return amount / 301;
}
function gbp(amount) {
    return amount / 360;
}
function jpy(amount) {
    return amount / 1.8;
}
// inquirer returns a string, so changing it to number before performing arithmetics on it and exemptioning "," by replace method
questions.amount = parseFloat(questions.amount.replace(/,/g, ""));
if (isNaN(questions.amount)) { //Dealing with invalid string input as amount
    console.log("Invalid Amount entered. Please try again");
}
else if (questions.currency == "USD") {
    console.log(usd(questions.amount));
}
else if (questions.currency == "EUR") {
    console.log(eur(questions.amount));
}
else if (questions.currency == "GBP") {
    console.log(gbp(questions.amount));
}
else if (questions.currency == "JPY") {
    console.log(jpy(questions.amount));
}
