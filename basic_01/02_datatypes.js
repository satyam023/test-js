 "use strict";  // treat all js code in newer version


//  alert("are u ok ?");
// alert(3+3);
// console.log("satyam")
// numer => 2 to ower 53 
// bigint
// string => ""
// null => standalone value --> object type
// undefined =>  --> undefined type
    // symmbol used in react , unuique 

// object


// two types of datatypes based on how value store in memory and how you access them 
// Primitive -> only value change 
// Non Primtive (Refrence type) memory can be acceible
// Primitive -> 7 types 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

//REfrence type 
// Array , Objects , Functions

// JavaScript is a dynamically typed language. 
// This means that the type of a variable is checked during runtime, and variables can hold values of different types during the execution of the program.
//  In contrast, statically typed languages require variables to have their types declared before runtime, and the type of a variable remains fixed throughout its scope.


// primitive data type 
// ==================
// String : type of string
// Number : type of number 
// BigInt : type of Bigint
// Boolean : type of boolean
// Null : type of object *
// Undefined : type of undefined 
// Symbol : type of Symbol

// reference data type 
// ==================
// array , object , function 
// only fn type of function and other object 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory -> stack (Primitive) , heap(Non-> primitive)

let myName = "Satya  Daku"
let anotherName = myName ; 
anotherName = "satyam pandey"


// here copy of myName is give to anotherName  
// So both have diff val
console.log(myName)
console.log(anotherName)


let userOne = {
    name : "Satya",
    age : 28
}

// here userOne is assined in Heap momory and 
// usertwo and userOne is refrencing to same Object in heap 
// thats why chnage in userTwo is change in userOne as both indicate the same object
let userTwo = userOne;
userTwo.age = 22

console.log(userOne.age);
console.log(userTwo.age);