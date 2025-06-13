// if u writt getter then - > setter is need to wrote
// by default getter setter is present
// gettter and setter is write using get set 
// name may be like propert and property is treated as method 


// class User{
//     constructor (username,  password){
//         this.username = username
//         this.password = password
//     }

//      // in this way i got an error as race condition btwn cosnstructor and getter_setter
//      // error: -Maximum call stack size exceeded
//     // get password(){
//     //     return `${this.password}`
//     // }
//     // set password(value){
//     //     this.password = value
//     // }

//     // solution change variable name 
//     get password(){
//         return `${this._password.toUpperCase()}`
//     }
//     set password(value){
//         this._password = value
//     }

//     get username(){
//         return `${this._username.toUpperCase()}`
//     }
//     set username(value){
//         this._username = value
//     }

// }

// const one = new User("sam", 'abvcgjh')

// console.log(one)
// console.log(one.password)


// earlier when class was not there 
// function based
// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);


// object base 

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

    //  here get set treat as property 
    //  get and set turn the email into a virtual property
    //  You don’t call them as functions — they behave like properties


}

const tea = Object.create(User)
console.log(tea.email);