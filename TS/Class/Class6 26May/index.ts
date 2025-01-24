                                                         //Object Literals
/*Object literals is creating of objects directly within your code*/
let person = {
    name : "John Cena",
    age : "52",
    moto : "you can't see me!"
}
                               //Structural Typing in Object literals
/*Structural Typing means that type compatibility is based on shape or 
structure of the types or in this case objects. this differs from NOMINAL 
Typing which means compatibility is determined by type's name or label*/
interface Ball {
    diameter: number;
  }
  
interface Sphere {
    diameter: number;
    
  }
  
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
// These two interfaces are completely transferrable in a structural type system and are totally compatible
ball = sphere
sphere = ball
// If we add in a type which structurally contains all of
// the properties of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  console.log("tube", tube);
  //tube = ball; //Error because L.H.S must be equal to R.H.S in terms of properties or shape of an object
  ball = tube;
  console.log("ball", ball);
//Here diameter  is ball's original property and can be accessed by dot notation but length can not.
/*Because a ball does not have a length, then it cannot be assigned to the tube variable. 
However, all of the members of Ball are inside tube, and so it can be assigned.*/
let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2, name: "Tom" };
//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type

//Case 2a
//myType = { id: 2, name_person: "Tom" }; //Case 2a: Error, renamed or missing property

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number; [a: string]: any }; //Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature

console.log("🚀 ~ x:", x);
x = { id: 2, fullname: "Zia Khan", lastName: "Khan", isUser: true };// index signature can be repetitive
console.log("🚀 ~ x:", x);
//Case 3
//myType = { id: 2, name: "Tom", age: 22 }; //Case 3: Error, excess property
//Case when STALE object literal are assigned to a variable

let myType2 = { id: 2, name: "Tim" };

//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
console.log(myType);
let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
//myType3 = myType; //Case 2: Error, renamed or missing property, rule same for stale and fresh object

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number; [x: string]: any }; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature

var myType4 = { id: 20, name: "Tom", age: 22 };
//Case 3
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
var x1: { foo: number };
//x1 = { foo: 1, baz: 2 }; // Error, excess property `baz`

var y1: { foo: number; bar?: number };
//y1 = { foo: 1, baz: 2 }; // Error, excess or misspelled property `baz`

var a: { foo: number };
//a = { foo: 45, cvb: "fghj" }; // fresh
var a1 = { foo: 1, baz: 2 };
a = a1; //No Error
// but this will give error a1 = a;

var z: { foo: number; bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1; //No Error
                                                   //Special Data Types (any,unknown,never)
// Any

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
  console.log("Hey again!");
}; // OK

//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
  console.log("Hey again!");
}; // OK

// Assigning a value of type unknown to variables of other types
let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error                                                   
               // Never
function abc() {

}

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

//console.log(error("This is Error Message"));

// Inferred return type is never
function fail() {
  return error("Something failed");
}
//fail(); throws error if called
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
                                     //Explicit Casting
let myname: any = "Zia";
console.log(myname);
// Output: Zia
// as word
console.log(typeof myname);

let xy: unknown = "hello";
//console.log(xy.length)
console.log((xy  as string).length);
//myname as number;
myname = 6; // narrowing
console.log(typeof myname);

// <data type>
console.log((myname as string).length);
console.log((<string>myname).length);

// number to string
// string to number                         
let abcd = 5;
console.log(abcd as unknown as string);

let xyz = "12A3";

console.log(xyz as unknown as number);

console.log(<number>(<unknown>xyz));

function fun1(value: number) {}
fun1(abcd);
fun1(xyz as unknown as number);   
                                               //Enums
enum Color {
  Red, //0
  Green,//1
  Blue,//2
} //starts with 0

enum StudentStatus {
  Active = "active",
  Inactive = "inactive",
  DropOut = "dropOut",
}

let student = {
  id: 1,
  name: "Zaib",
  status: StudentStatus.Inactive,
};

if (student.status === StudentStatus.Active) { //false
} else if (student.status === StudentStatus.Inactive) {//true
}
let c: Color = Color.Green;
//c = 1
console.log("🚀 ~ c:", c);

enum Color1 {
  Red = 100,
  Green,//101
  Blue,//102
}
// enum declare without const // [value] => key
let colorName: string = Color1[102];
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
let colorIndex: number = Color2["Blue"];
console.log(colorIndex);   
                                         // const Enums
const enum ColorA {
  Red1 = 45,
  Green = 45,
  Blue,
} //starts with 0
var col: ColorA = ColorA.Green;

 const enum ColorB {
  Red = "fdsygchjklwdfghvwejbkfdn,ewjghvfbm",
  Green = 2,
  Blue = "null",
}
//var colorName1: string = ColorB[2]; //Not allowed with const enums
//console.log(colorName);

const enum ColorC {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorAIndex = ColorB["Blue"];
console.log(colorAIndex);  
                                               //Arrays
let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax // value print
let array2: Array<number> = [1, 2, 3]; //alternative correct syntax
let array3: number[] = []; //correct syntax to define an empty array

//let array4: number[] = new number[2](); //error

let array5: number[] = []; 
array5.push(1234); //dynamically adding

const array6: (number|string)[][] | string[][] = [
  [12, 34, 5],
  [23, 56, 7],["a","be"]];

const rsqtye = [5, "6", 56];
const array644r: number[][] | string[][] = [
  ["12", "34", "6"],
  ["23", "56", "7"],
];

console.log(array6[1]); //[23,56,7]
console.log(array6[1][0]); //23
console.log("🚀 ~ array6:", array6);

const array7 = array6.flat();  
console.log("🚀 ~ array7:", array7);

const array78 = [12, 45, 6, 7];

const array67 = array7.concat(array78);
console.log("🚀 ~ array67:", array67);

console.log(array67.join(" %^*%%& "));                                                                                                                                  