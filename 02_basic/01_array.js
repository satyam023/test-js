//  js - array copy is shallow cody not a deep copy
// all built in copy operations with js object create shallow copies , rather than deep copies
// Shallow copies -> Ashallow copy of an object is a copy whose properties share the same refrences 
// Deep Copies ->  A Deep copy of an object is a copy whose properties // does not // share the same refrences 

const myArr = [0 , 1 , 2 , 3 , 4 ,5];
// const myArr2 = new Array(0 , 1 , 2 , 3,4 );
// console.log(myArr[0]);
// console.log(myArr)

// Array methos 
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9) // push values from front ;
// myArr.shift()  // pop front

// console.log(myArr.includes(9)) // true or false -> false
// console.log(myArr.indexOf(9)) // not present => -1 

// const newArr = myArr.join() // make array in string comma seprated 
// console.log(typeof newArr) -> string

// console.log(myArr)

// splice , slice 

// console.log("A" , myArr)

// const myn1 = myArr.slice(1 , 3) 

// console.log(myn1)
// console.log("B" , myArr)

// const myn2 = myArr.splice(1 , 3) 
// console.log(myn2)
// console.log("C" , myArr)

// slice last index not include and return new array not manipulate original array
// splice last index is also included and return new array and original aarray is also manipulated 
// as index in splice that value  not in orginal array 



const arr1 = [0 , 1 , 2 ]
const arr2 = [3 , 4, 5]
// arr1.push(arr2);

// console.log(arr1)  // it will return arr of arr
// push work on original array 

// const arr3 = arr1.concat(arr2)
// console.log(arr3)
// return new array 


// spread operator

// const newArr = [...arr1 , ...arr2]
// console.log(newArr)

// const res_arr = [0 , 1, 2 , [3, 4, 5, 6] , 7 , [8 , 9 ,[10 , 11]]]

// const useable_array = res_arr.flat(Infinity)
// // The .flat([depth]) method creates a new array with sub-array elements flattened up to the specified depth.
// console.log(useable_array)

// check and transform to array 

console.log(Array.isArray("Satyam"))
console.log(Array.from("Satyam"))
console.log(Array.from({name: "satyam"}))