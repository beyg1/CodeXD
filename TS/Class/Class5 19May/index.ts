            // Union literals 
let myname: string | null | number;   // myname could be a string or null or number.
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
let myAge: string | number;

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

let newAge = Math.random() > 0.6 ? "Khan":              // this syntax is called "terinary statement"
             Math.random() < 0.6 ? "Pathan": 60;          // it is short way of using if else type condition  
console.log(newAge); 
//newAge.toLowerCase();//Error: Transpiler cannot narrow


if (typeof newAge === "string") {
  // Type of newAge: string
  console.log(newAge.toLowerCase()); // Can be called
}

typeof newAge === "string"           //dealing with terinary statement
  ? console.log(newAge.toUpperCase()) // Ok: string
  : console.log(newAge.toFixed()); // Ok: number
  
let age: number | "died" | "unknown";        

let Status: "Active" | "passOut" | "dropOut"; // Example of literal union
Status = "passOut";
//Status = "died";
Status = "Active";
  
age = 1253612167310; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living"; //Error
  
  let zia: "zia";
  
  zia = "zia";
  //zia = "khan";//Error
  
  let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
  
  if (yourName) {
    yourName.toUpperCase(); // Ok: string
  }
  
  //yourName.toUpperCase();//Error: Object is possibly 'undefined'.
  
  yourName?.toUpperCase(); //OK
  
  // You can also define a type alias
  type RawData = boolean | number | string | null | undefined; //Example of Union Type
  
  let data: RawData;
  
  
  // You can even combine them
  
  type Id = number | string;
  
  type IdMaybe = Id | undefined | null;
                                        //Objects
let teacher = {       // Here teacher is an object with name,experience & active as it's properties.
  name: "Zeeshan",     // Key Value based system
  experience: "10",     // here 10 because of being enclosed in "" is a string.
  active: true,
};

console.log(teacher.name);
console.log(teacher["experience"]);    
 
let f_name: string;
f_name = "Jahanzaib";
// Type Declaration can also be done on object's properties along with union type 
let student: {
  name: string;
  age: number | undefined;
};

student = {
  age: undefined,
  name: "Hira",
};

let student1: {
  name: string;
  age: number | undefined;
};

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

let f1name: string; // variable declare
f1name = "Zia"; //

let teacherX: {
  name: string;
  exp: number;
};

teacherX = {
  name: "Zeeshan",
  exp: 10,
};
console.log(teacher.name);
// 2. Aliased Object Types
/* What is an Alias?
An alias in TypeScript is essentially a different name for a type. It allows you to define complex types 
and then use them repeatedly with a simple name. This makes your code cleaner and easier to maintain.*/
// Aliased Object Type (type // interface)
     // type Alias
/*Type aliases are created using the type keyword. They can represent primitive types, union types, intersection types, object types, and more.*/
type Teacher = {
  name: string;
  exp: number;
};

let teacher2: Teacher = {
  name: "Jahanzaib",
  exp: 4,
};

let teacher3: Teacher = {
  name: "Zeeshan",
  exp: 5,
};

let teacher4: Teacher = {
  name: "Hira Khan",
  exp: 10,
};

type Student = {
  name: string;
  age?: number;
};

let studentA: Student = {
  name: "Hira",
  age: 30,
};

let student2: Student = {
  name: "Jhanzeb",
};

console.log(student["name"]);
console.log(studentA.age);

       // Interfaces
/* Interfaces in TypeScript are similar to type aliases 
but are often used to define the shape of objects. They can be extended and implemented, providing more flexibility in some cases.*/
interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
  subordiates: 40,
};
//Extending: Interfaces can be extended using the extends keyword,
 //whereas type aliases for objects can be combined using intersections. It can also redclare itself to add another property*/
interface Permission extends Manager {
  permissions: string;
}


let generalManager: Permission = {
  name: "Hassan",
  subordiates: 15,
  permissions: "yes"
}
/* Or just Redclare interface manager
interface Manager {
  permissions: string[];
}  But if we do this then Objects aliased before on Manager will require the new property too  */

                                      // Nested Objects
interface Book {      
  name: string;
  ISBN: string;
}

const book: Book = {
  name: "This is Book",
  ISBN: "1234567890",
};

console.log(book);

// {name:'This is Book',ISBN:'1234567890'}

type Author = {
  name: string;
};

const author: Author = {
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

type Publisher = {
  name: string,
  book: Book,
  author: Author;
};

let publisher: Publisher = {
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
  greet: function() {
      console.log("Hello, my name is " + this.name);
  }    
};
                    //Intersected Types
interface StudentG {            // Intersected type combines the properties of two or more objects.
  student_id: number;
  student_name: string;
}

interface TeacherG {
  teacher_Id: number;
  teacher_name: string;
}                    
type intersected_type = StudentG & TeacherG;
let obj1: intersected_type = {
  student_id: 3232,
  student_name: "rita",
  teacher_Id: 7873,
  teacher_name: "seema",
}
console.log(obj1.teacher_Id);
console.log(obj1.student_name);


