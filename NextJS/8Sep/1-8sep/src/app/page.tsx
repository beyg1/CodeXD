'use client'
import { useState, useEffect } from "react"


export default function Home() {
const [counter,setCounter]= useState(0)
//let counter =0
function increment(){
  setCounter(counter+1) 
  console.log(counter)
}
function decrement(){
 const decrementValue = counter -1
  setCounter(decrementValue)
  console.log(counter)
}

useEffect(()=>{
  console.log("useEffect")
  return ()=>{
    console.log("useEffect unmounting") // return is used to unmount the component 
  }
},[counter]) //here by using counter in dependancy array we can trigger an api or perform any 
             //function on basis of state changing. here implement the concept of react life cycle.
  return (
    <div className="bg-slate-400 min-h-screen  items-center justify-items-center">
      <div className="flex p-5 justify-center">
        <button onClick={decrement} className=" bg-red-500 p-5 w-20 rounded-2xl text-3xl font-extrabold text-center">
          -
        </button>
      </div>
      <span className="flex p-5 justify-center text-3xl font-bold text-yellow-300">{counter}</span>
      <div className="flex p-5 justify-center">
        <button onClick={increment} className=" bg-blue-500 p-5 w-20 rounded-2xl text-3xl font-extrabold text-center" >
          +
        </button>
      </div>
      
    </div>
  );
}
