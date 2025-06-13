//  ES6
// All these are still syntactic sugar 

// class User{
//     constructor(username , email , password){
//         this.username= username
//         this.email= email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }


// const chai = new User("Chai" , 'chai@gmail.com', "123")

// console.log(chai.encryptPassword());

// BTS
// if class was not available 

function User(username , email, password){
         this.username= username
        this.email= email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return  `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return  `${this.username.toUpperCase()}`
}


const tea = new User("tea" , "tea@gmail.com" , "123");

console.log(tea.encryptPassword())
console.log(tea.changeUserName())
console.log(tea)