                       //Classes
class Point {
    //attributes (let,const khbi bi start nai hoty)  (variable (let,const))
    //methods (function ,let ,const keyword nai likhty) (functions (name,arrow))
    x: number;
    private y: number;// reserved keyword protects the member, can only be used inside
    protected z: number;// reserved keyword,can only be accessed by parent
    // or child class but not outside class
  
        // constructor (special method)
    constructor(x: number, y: number, z: number) {
      // values initialization
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    //methods
  
    private print() {   // cannot directly call it outside class but print2 can call it
      console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}`);
    }
  
    print2() {    //since print is private so it's called right in here
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
  model: string;
  year: number;
  price: string;
  constructor(model: string, year: number, price: string) {
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

tesla.drive()