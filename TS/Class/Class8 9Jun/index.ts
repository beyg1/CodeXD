                             // Simple callback example
function hello(param:any) { // arrow function received in the parameter of hello
    param("Harry")  // arrow function called as a parameter of hello and executed
}
let arrowFunc = (param1: string) => {
    console.log(`hello there ${param1}`)
}
hello(arrowFunc) //Arrow function passed as an argument to hello function
                              // Promise
let myPromise = new Promise((resolve,reject)=>{  //in promise there's always a callback func
   console.log("Promise Pending")   // resolve & reject as parameters
   setTimeout(()=>{
    let data = "Data Fetching successful" // data which promise is treating
    if(data){
        console.log("Promise resolved")
        return resolve(data)   // data fetched and returned to resolve condition of promise
    }
    else{
        console.log("Promise Rejected")
        return reject(new Error("Data Fetching failed")) // Promise rejected
    }
   },1500)
})  
myPromise.then((res)=>{console.log(res)}).catch((rej)=>{console.log(rej)})
//.then catches the resolve condition and .catch catches reject
                            // Async await
// Async returns a promise
       
function addNumbers(a: number, b: number): Promise<number> { //Return type Promise
    return new Promise((resolve) => { // only resolve is treated  
        setTimeout(() => {
            const sum = a + b;  //after timeout a + b is calculated
            resolve(sum);     //passed in resolve condition
        }, 3000); // Wait for 3 seconds
    });
}

async function displaySum() { // async is necessary for await constructor
    const sum =  await addNumbers(2, 3); // result stored in sum and addnumbers awaits to be executed
    console.log(sum); // Prints 5
}

displaySum();                   
