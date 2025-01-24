//Loops
// Do while loops // Runs one time then the condition is checked for it to repeat in loop
// while loop // First checks condition then the loop is initiated
// Above 2 are mostly not used in javascript
// for loop
// for (expression1 ; expression2; expression3){ body }
// expres1 : starting condition
// expres2 : ending condition
// expres3 : manipulating starting condition so it's not an infinite loop
for(let x = 0; x < 5; x++){
    console.log("loop",x);
}
//Practical example
const array = ["a","b","c","d"]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
// OR :D
for(let x = 0; x < array.length; x++){
    console.log("This is for loop",array[x])
}


function printTable(input: number){
    for (let x = 1; x <= 10; x++){
        console.log(`${input} X ${x} = ${input * x}`)
    }
}
printTable(2);                // premitive & non premitive datatypes ko revisit kro
