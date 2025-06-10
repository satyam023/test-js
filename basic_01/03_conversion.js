let score = "33abc"

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


