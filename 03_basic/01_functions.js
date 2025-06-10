function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("T")
    console.log("Y")
    console.log("A")
    console.log("M")
    console.log(" ")
   
}

// sayMyName  function -> refrence 
// sayMyName()  function -> executin
// sayMyName();

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2);
// }
// num1 , num2 are parameter 
// addTwoNumber(3 , 4);
// 3 , 4 are  arguments values 
// above function return nothings 


function addTwoNumber(num1 , num2){
    // let result = num1 + num2 
    // return result;

    return  num1 + num2 ;
}

const result = addTwoNumber(4 , 5);
// console.log("Result: " , result)

function loginUserMessageUser(username){
    return `${username} just logged in`
}

// console.log(loginUserMessageUser("satyam"))
// console.log(loginUserMessageUser()) // undefined if noting pass

// function calculateCartPrice(...num1){
//     return num1
// }

// // ... num1 is rest operator 
// console.log(calculateCartPrice(200 , 400 , 500 , 2000))
// retrun an array of 200 , 400 , 500 , 2000


function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// ... num1 is rest operator 
console.log(calculateCartPrice(200 , 400 , 500 , 2000))
// retrun an array of  500 , 2000
// 200 , 400 , is taken by val1 and 2


const user = {
    username: "Ramu",
    prices: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj?.username} and price is ${anyObj?.price}. `)
}

// handleObject(user);
handleObject({
    username: "satyam ",
    price: 999
})

