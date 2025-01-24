"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
class Point {
    //attributes (let,const khbi bi start nai hoty)  (variable (let,const))
    //methods (function ,let ,const keyword nai likhty) (functions (name,arrow))
    x;
    y; // reserved keyword protects the member, can only be used inside
    z; // reserved keyword,can only be accessed by parent
    // or child class but not outside class
    // constructor (special method)
    constructor(x, y, z) {
        // values initialization
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //methods
    print() {
        console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}`);
    }
    print2() {
        this.print();
    }
}
//console.log(Point)
const point = new Point(5, 10, 20);
console.log("🚀 ~ point:", point);
console.log(point.x); // not private nor protected
point.print2();
//console.log(point.z);
const point1 = new Point(15, 100, 200);
point1.print2();
//OOP
class Car {
    model;
    year;
    price;
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("The Car has Started driving");
    }
    stop() {
        console.log("The car has stopped");
    }
}
const tesla = new Car("Model X", 2022, "$114,990");
console.log("🚀 ~ tesla:", tesla);
tesla.year = 2024;
console.log("🚀 ~ tesla:", tesla);
tesla.drive();
