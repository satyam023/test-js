let score = "33abc"
// score =  null  -> console.log(valueInNumber); -> 0
// score = undefined -> console.log(valueInNumber); -> undefined
 console.log(typeof (score));  // score = 33 -> number 
 console.log(typeof (score));  // score = "33" -> string
 
 let valueInNumber = Number(score); 
 console.log(typeof (valueInNumber));  // obviosly a number 
console.log(valueInNumber);

// Note
//-------//
 // But if score is like "32abc" -> not a number (NaN) is also a number  no strict check in js 
// score = "32abc"
// let valueInNumber = Number(score); 
// console.log(typeof (valueInNumber)); -> NaN 
//console.log(valueInNumber);  -> Nan

// "33" => 33
// "33abc"  =>  NaN
// true = > 1 ; 

// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "satya";
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true  0 -> false
// "" -> false
// "satya" -> true