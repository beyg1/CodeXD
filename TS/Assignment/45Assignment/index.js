"use strict";
// //Problem 1 Install Node.js, Typescript,VScode
// //Problem 2 Personal message
// let nameP2 = "Eric"
// console.log(`Hello ${nameP2}, would you like to learn some Python today?`)
// //Problem 3 Print name in upper, lower and title case
// let nameP3 = "Tom warner"
// console.log("name with uppercase: ",nameP3.toUpperCase())
// console.log("name with lowercase: ",nameP3.toLowerCase())
// const titleCase = (str:string)=>{ // no simple method available for title case
//     return str   // have to define a function     
//     .toLowerCase() // convert name to lower case
//     .split(" ")   // split the alphabets of each word
//     .map((word)=>{    // map them to capitalise first alphabet and concatenate the rest
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ") // join the name using space
// }
// const titledCase = titleCase(nameP3)
// console.log("name with title case: ",titledCase)
// //Problem 4 Famous Quote 
// let nameP4 = "Imran Khan"
// let famousQoute = "'Either i will do it or i will die!'"
// console.log(`${nameP4} in a motivational speech, shared his mindset on challenges in life. ${famousQoute}`)
// //Problem 5 Repeat Pr4 in a certain way
// let famous_person = "Imran Khan"
// let message = "'Either i will do it or i will die!'"
// console.log(`${famous_person} shared his mindset in a motivational speech, ${message}`)
// //Problem 6 name with white space and without
// function stripAndPrintName(name: string): void {
//     const originalName = `\n \t\t\t${name}\t\t\t \n`;
//     // \t creates the white space and \n logs the result in next line
//     console.log("name with whitespace:", originalName);
//     // .trim Remove the whitespace and print the name again
//     const strippedName = originalName.trim();
//     console.log("Stripped name (without whitespace):", strippedName);
// }
// const nameP6 = "  Bruce Snynder  ";
// stripAndPrintName(nameP6);
// //Problem 7 basic arithmetic functions
// let addition = 4+4
// let subtraction = 12-4
// let multiplication = 2*4
// let division = 16/2
// console.log("By Addition: ",addition)
// console.log("By Subtraction: ",subtraction)
// console.log("By Multiplication: ",multiplication)
// console.log("By Division: ",division)
// // Problem 8 console 8 on 4 lines
// let i  //defining i to be used in for loop
// for(i=0;i<4;i++){ //to repeat a same operation 4 times we use for loop
//     console.log(5+3)
// }
//// Problem 9 Fav number
//let favNumber = 1
//console.log(`Hi, my fav number is ${favNumber}.`)
//// Problem 10 Adding comments to 2 of your programs: Already done
//// Problem 11 friends name in an array
// let friendsName = ["Waleed","Usama"]
// console.log(friendsName[0])
// console.log(friendsName[1])
// //Problem 12 utilize the name in the array
// console.log(`${friendsName[0]} is one of my friends.`)
// console.log(`${friendsName[1]} is one of my friends.`)
// //Problem 13 fav vehicles in an array
// let favVehicles = ["Yamaha Ybz ","Crossovers","LandCruisers"]
// console.log(`${favVehicles[0]} is a comfortable and efficient bike and i don't mind the looks either :).`)
// console.log(`${favVehicles[1]} are practical cars, even for city drives. The utility is unmatchable.`)
// console.log(`${favVehicles[2]} are one of the best vehicles ever produced period. Would love to have one day.`)
// //Problem 14 Guest list
// let guestList = ["Mamo","Rauf bhai","Didi Aunti"]
// console.log(`To ${guestList[0]}: Assalamoalikum ${guestList[0]}, kia haal hain. aap kal family smait dinner pay invited hain.`)
// console.log(`To ${guestList[1]}: Assalamoalikum ${guestList[1]} , kia haal hain. aap kal family smait dinner pay invited hain.`)
// console.log(`To ${guestList[2]}: Assalamoalikum ${guestList[2]} , kia haal hain. aap kal family smait dinner pay invited hain.`)
// console.log(`To ${guestList}: Assalamoalikum, unfortunately Didi auntie can't make it. Kal ka plan cancel hay. wait for new invitation. `)
// // Problem 15 Guest list with a change
// guestList.splice(2,1,"Bibi Auntie") //manipulating guest list array by splice
// console.log(`To ${guestList[0]}: Assalamoalikum ${guestList[0]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[1]}: Assalamoalikum ${guestList[1]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[2]}: Assalamoalikum ${guestList[2]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList}: Assalamoalikum, Dinner on Saturday is going to be fun because i just found out a bigger dinner table. `)
// // Problem 16 bigger dinner table
// guestList.unshift("Bablo bhai")
// guestList.splice(3,0,"Tayyab")
// guestList.push("Talha Bhai")
// console.log(`To ${guestList[0]}: Assalamoalikum ${guestList[0]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[1]}: Assalamoalikum ${guestList[1]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[2]}: Assalamoalikum ${guestList[2]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[3]}: Assalamoalikum ${guestList[3]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[4]}: Assalamoalikum ${guestList[4]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList[5]}: Assalamoalikum ${guestList[5]}, kia haal hain. aap saturday ko family smait dinner pay invited hain.`)
// console.log(`To ${guestList}: Assalamoalikum , I appologise for any inconvinience. But dinner plan is canceled due to bigger table unavailablity. I can only invite two people.`)
// // Problem 17 only invite two guests
// let totalGuest
// for(totalGuest=5;totalGuest>=2;totalGuest--){ //apologising to guests and ticking their names off from guest list
//     console.log(`To ${guestList[totalGuest]}: I appologise for not being able to invite you to dinner this Saturday.`)
//     guestList.pop()
// }
// let updatedList 
// for(updatedList=guestList.length-1;updatedList>=0;updatedList--){ //remaining 2 are invited and names ticked off from list
//     console.log(`To ${guestList[updatedList]}: Salam ${guestList[updatedList]}, You're still invited to dinner this saturday. Please bring your family too.`)    
//     guestList.pop()
// }
// console.log("Empty Guest list: ",guestList)
// // Problem 18 Seeing the world
// let PlacesToVist = ["Makkah","Madina","Islamabad","Hunza","Kashmir"]
// console.log(PlacesToVist) //Original Order
// const placesOrdered = [...PlacesToVist].sort() // spread operator creating a new array which is sorted by .sort()
// console.log(placesOrdered)  // Alphabetically ordered list
// console.log(PlacesToVist) //Original Order
// console.log(placesOrdered.reverse())// reversed alphabetic order
// console.log(PlacesToVist) //Original Order
// console.log(PlacesToVist.reverse()) //Original Order now reversed
// console.log(PlacesToVist.reverse()) //getting it back to Original Order
// PlacesToVist.sort() //original array now being sorted
// console.log(PlacesToVist) //Original Order now sorted
// PlacesToVist.reverse()// original array sorted for being in reverse alphabetic order
// console.log(PlacesToVist) //Original Order now reversed
// // Problem 19 Program 18 selected for to check how many guests i am expecting
// let expectGuest = guestList.length
// console.log(`Total number of people, i am inviting to dinner ${expectGuest}.`)
// Problem 20 list of cities
let cityList = ["Makkah", "Madinah", "Islamabad", "Brussels", "Sann'a", "Istanbol"];
// Printing names of cities in the list
console.log("List of cities i like:");
for (let city of cityList) {
    console.log(city);
}
