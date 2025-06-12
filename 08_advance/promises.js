// how to create promise 
// Do an async task 
// DB calls , cryptography , network


// promise creation 
// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task 1 created")
//         resolve() // this is used to connect with then 
//     },1000)
// })
// promise consumption 
// promiseOne.then(function(){
//     console.log("Async 1 resolved")
// })


// no need to store in variable

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task 2 is created")
//         resolve()
//     } , 1000)
// }).then(function(){
//     console.log("Async task 2 resolved")
// })


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("async three")
//         resolve({"user": "satyam" , "email": "satyam@example.com" , "password":"123"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// prevention from call back hell


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
        resolve({"username": "satya" ,  "email": "satyam@example.com" , "password":"123"})
        }else{
            reject("Error: - Something Went Wrong")
        }
    }, 1000)
})
// promiseFour.then((user) =>{
//     return user.username;
// }).then((username)=>{
//     console.log("username:-", username);
// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected")
// })

// handle by async await 
// Use async/await: When writing more than 1 async operation or working with clean, readable code.
// Use .then().catch(): For quick fetches or chaining in callbacks (event listeners, scripts).

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
        resolve({"username": "satya" ,  "email": "satyam@example.com" , "password":"123"})
        }else{
            reject("Error: - Something Went Wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error: ", error);
    }
}

getAllUsers()