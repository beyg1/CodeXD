                                            //step09a_functions

//Named function
function add(x: number, y: number): number {
    return x + y;
  }
  
  // es2015
  // arrow function (block scope)
  
  // const functionName = () => {}
  
  const add1 = (x: number, y: number): number => {
    return x + y;
  };
  
  console.log(add1(5, 6));
  
  //Anonymous function
  let myAdd1 = function (x: number, y: number): number {
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    return x + y;
  };
  
  console.log(myAdd1(5, 6));
  // can use arrow function for anonymmous functions
  setTimeout(() => {
    console.log('Hello, World!');
  }, 1000);
  
   //Anonymous function with explict type
  let myAdd2: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  
  //type names dont matter
  let myAdd3: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  
  //Lambda functions (pure function)  //lexical scope: inherit the scope they are called in
  let myAdd4 = (a: number, b: number) => a + b;
  //output will be: var myAdd4 = function(a : number, b : number) {return a + b};
  
  type GreetFunction = (a: string) => void;  // type alias for a function
  function greeter(fn: GreetFunction) {    // parameter is type alias from above
    //fn();
    //....
  }
  
  greeter(function (a: string) {//lambda function is passed as an argument to greeter fn when it's called
    console.log(a);
  });
                                  //step09b_function_optional_parameter
//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
  //return firstName + " " + lastName;
}

let result1 = buildName("Bob"); //ok
console.log("🚀 ~ result1:", result1);
// Bob
// Bob undefined (correct)

//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
console.log("🚀 ~ result3:", result3);

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

const buildName3 = (firstName: string, lastName?: string): string => {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
console.log("🚀 ~ buildName3 ~ buildName3:", buildName3("Bob", "Adams"));

const buildName4A = (firstName: string, lastName?: string): string => {
  return lastName ? firstName + " " + lastName : firstName;
};
console.log("🚀 ~ buildName4 ~ buildName4:", buildName4A("Bob"));                         
                                      //step09c_function_default_parameter
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildNameX(firstName: string, lastName = "Khan"): string {
  return firstName + " " + lastName;
}

let result1X = buildNameX("Bob"); //works correctly because last parameter is optional
console.log("🚀 ~ result1X:", result1X);

//let result2X = buildNameX("Bob", "Adams", "Sr."); //error, too many parameters
let result3X = buildNameX("Bob", "Adams"); //correct
console.log("🚀 ~ result3:", result3X);

//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName1X: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "Khan"
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

let resultXY = buildName1X("John","Kirby")
console.log(resultXY)                                  
                                                 //step09d_function_rest_parameter
function buildNameY(
  firstName: string,
 // name?: string,
  lastName: string,
 // lastName1?: string,
 // lastName2?: string,
  ...restOfName: string[]
) {
  console.log("🚀 ~ lastName:", lastName);
  //Named function with Rest parameters
  return firstName + " " + lastName + " " + restOfName.join(" ");
}

const employeeName = buildNameY("A","b","c","d");
console.log("🚀 ~ employeeName:", employeeName);
//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

type BuildName = {
  firstName: string;
  lastName?: string;
  lastName1?: string;
  lastName2?: string;
  lastName3?: string;
  firstName1: string;
  rest: Array<string>;
};
const buildName4 = (obj: BuildName) => {
  console.log("🚀 ~ buildName4 ~ obj:", obj);
};


buildName4({
  firstName: "A",
  firstName1: "B",
  rest: ["AD"],
});

let student = {
  name: "Jahanzaib",
  age: 25,
  name1: "Jahanzaib1",
  age1: 40,
  name2: "Jahanzaib2",
  age3: 50,
  name4: "Jahanzai3",
  age5: 60,
};

console.log("🚀 ~ student:", student);

const ageX = student.age;
console.log(ageX)

// object destructed

const { age, name } = student;

//object update
student.age = 30;

console.log("🚀 ~ student:", student);

// spread operator

let student2 = {
  ...student,
  age3: 65,
};

console.log("🚀 ~ student2:", student2);

let student4 = {
  ...student,
  age4: 90,
};

console.log("🚀 ~ student4:", student4);    
                                                  //step09f_function_overloads
//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function overload(arg1: string, arg2: string): string; //option 1
function overload(arg1: number, arg2: number): number; //option 2
function overload(arg1: boolean, arg2: boolean): boolean; //option 3
function overload(arg1: number, arg2: string): boolean; //option 3

// //this is not part of the overload list,
// //so it has only three overloads
function overload(arg1: any, arg2: any): any {
  return arg1 + arg2;
}

// //Calling 'overload' with any other parameter types would cause an error except for the three options
console.log(overload(1, 2));
console.log(overload("Hello", "World"));
console.log(overload(true, false));
console.log(overload(1, "string"));
