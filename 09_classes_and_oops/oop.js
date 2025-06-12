// object literals
const user = {
    username: "satya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());


// cunstructor funtion new

function User(username , loginCount , isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
}
const userOne = new User("satyam" , 12 , true)  // if not use new then over write by userTwo 
const userTwo = new User("pandey" , 22 , true)
console.log(userOne.constructor) //  nothing but user refrence  



// ✅ Summary Notes:

/*
- Functions (except arrow) have a .prototype property.
- Objects created with `new` link to that function's prototype.
- You can share methods by attaching them to the prototype.
- JavaScript uses prototype chaining to find properties/methods.
- Avoid duplicating methods on every instance — use prototype!
*/






