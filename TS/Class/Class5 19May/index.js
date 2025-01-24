"use strict";
// Union literals 
let myname; // myname could be a string or null or number.
myname = "5";
myname = 5;
myname = null;
//myname = undefined  error           
console.log(myname);
myname = "zia";
console.log(myname);
//myname = undefined; //Error    since undefined is not taken in union when assigning type value.
myname = 12;
console.log(myname);
// Union literals are useful when a variable or a function(can have multiple parameters) can accept multiple types of values.            
/* Union Types: Use the | symbol to define a variable that can be one of several types.
   Literal Types: Use specific values as types to restrict the values a variable can hold.
   Narrowing: Use control flow statements like if, switch, or type guards (typeof, instanceof) to narrow down the type of
   a variable within a specific block of code.*/
// Narrowing 
let myAge;
myAge = 16; //narrowing
console.log(typeof myAge);
console.log(myAge);
//console.log(myAge.toLowerCase());//Error as after being narrowed a number value. cannot apply string method
myAge = "Twenty"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string
//because of narrowing         
let newAge = Math.random() > 0.6 ? "Khan" : // this syntax is called "terinary statement"
    Math.random() < 0.6 ? "Pathan" : 60; // it is short way of using if else type condition  
console.log(newAge);
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (typeof newAge === "string") {
    // Type of newAge: string
    console.log(newAge.toLowerCase()); // Can be called
}
typeof newAge === "string" //dealing with terinary statement
    ? console.log(newAge.toUpperCase()) // Ok: string
    : console.log(newAge.toFixed()); // Ok: number
let age;
let Status; // Example of literal union
Status = "passOut";
//Status = "died";
Status = "Active";
age = 125361272167310; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living"; //Error
let zia;
zia = "zia";
//zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
let data;
//Objects
let teacher = {
    name: "Zeeshan", // Key Value based system
    experience: "10", // here 10 because of being enclosed in "" is a string.
    active: true,
};
console.log(teacher.name);
console.log(teacher["experience"]);
let f_name;
f_name = "Jahanzaib";
// Type Declaration can also be done on object's properties along with union type 
let student;
student = {
    age: undefined,
    name: "Hira",
};
let student1;
student1 = {
    age: undefined,
    name: "Hira",
};
console.log(student["name"]);
console.log(student.age);
// OBJECT ALIASED
// 1.Anonymous Object Types
/* define structure of an object directly when using it,
rather than defining a separate type aliased or interface */
let f1name; // variable declare
f1name = "Zia"; //
let teacherX;
teacherX = {
    name: "Zeeshan",
    exp: 10,
};
console.log(teacher.name);
let teacher2 = {
    name: "Jahanzaib",
    exp: 4,
};
let teacher3 = {
    name: "Jahanzaib",
    exp: 4,
};
let teacher4 = {
    name: "Jahanzaib",
    exp: 4,
};
let studentA = {
    name: "Hira",
    age: 30,
};
let student2 = {
    name: "Hira",
};
console.log(student["name"]);
console.log(studentA.age);
let storeManager = {
    name: "Bilal",
    subordiates: 40,
};
let generalManager = {
    name: "Hassan",
    subordiates: 15,
    permissions: "yes"
};
const book = {
    name: "This is Book",
    ISBN: "1234567890",
};
console.log(book);
const author = {
    name: "This is Author",
};
console.log(author);
// {name:'This is Author'}
const obj = {
    name: "OBJ",
    type: "nesdted",
    user: {
        name: "Jahanzaib",
        age: 25,
        obj2: {
            name: "OBJ2",
        },
    },
};
console.log(obj);
console.log(obj.name);
console.log(obj.type);
console.log(obj.user);
console.log("User name", obj.user.name);
console.log("OBJ2 name", obj.user.obj2.name);
let publisher = {
    name: "This is Publisher",
    book: {
        name: "This is Book",
        ISBN: "1234567890",
    },
    author: {
        name: "This is Author",
    },
};
let person = {
    name: "Mary",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
let obj1 = {
    student_id: 3232,
    student_name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.teacher_Id);
console.log(obj1.student_name);
