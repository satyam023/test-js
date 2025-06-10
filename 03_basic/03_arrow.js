const user ={
    username: "Satyam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

    // this refer current context 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// Satyam, welcome to website
// {
//   username: 'Satyam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


// console.log(this);  - >  in node enironmwent  global obj is empty obj {} not inside function 

// but in browser console  this refer to global object window


// function chai(){
//     const username = "satyam"
    // console.log(this)  // return global object
    // console.log(this.username)  // undefined
    // console.log(this.username)  // that work only in object in this way
// }
// chai()
//  this inside function global obj



// const  chai = function (){
//     const username = "satyam"
//     // console.log(this)  // return global object
//     // console.log(this.username)  // undefined
//     // console.log(this.username)  // that work only in object in this way
// }
// chai()

// +++++++++++Arrow Function ++++++//

// chai  = () => {
//     const username = "satyam"
//     console.log(this)  // return empty object 
//     console.log(this.username)  // undefined 
// }
// chai()


// arrow function 
// () => {}

    // const addTwoNum =(num1 , num2) =>{
    //     return num1 + num2
    // }

    // implicit return without currly braces
    // if  ( ) used then no need to return 
    const addTwoNum = (num1 , num2) => num1 + num2;
    // console.log(addTwoNum(3 , 4))

    const returnObj = () => ({username: "satyam" , age: 22 , gender: "M" });

    console.log(returnObj());