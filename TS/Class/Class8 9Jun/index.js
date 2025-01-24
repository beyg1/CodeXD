"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Simple callback example
function hello(param) {
    param("Harry"); // arrow function called as a parameter of hello and executed
}
let arrowFunc = (param1) => {
    console.log(`hello there ${param1}`);
};
hello(arrowFunc); //Arrow function passed as an argument to hello function
// Promise
let myPromise = new Promise((resolve, reject) => {
    console.log("Promise Pending"); // resolve & reject as parameters
    setTimeout(() => {
        let data = "Data Fetching successful"; // data which promise is treating
        if (data) {
            console.log("Promise resolved");
            return resolve(data); // data fetched and returned to resolve condition of promise
        }
        else {
            console.log("Promise Rejected");
            return reject(new Error("Data Fetching failed")); // Promise rejected
        }
    }, 1500);
});
myPromise.then((res) => { console.log(res); }).catch((rej) => { console.log(rej); });
//.then catches the resolve condition and .catch catches reject
// Async await
// Async returns a promise
function addNumbers(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = a + b;
            resolve(sum);
        }, 3000); // Wait for 0.5 seconds
    });
}
function displaySum() {
    return __awaiter(this, void 0, void 0, function* () {
        const sum = yield addNumbers(2, 3);
        console.log(sum); // Prints 5
    });
}
displaySum();
