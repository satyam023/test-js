` use strict`
 function setUserName(username){
    this.username = username;
 }

 function createUser(username , email , password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
    // setUserName(username) // this not hold refrence 
 }


 const userOne = new createUser("sam", "sam@fb.com" , "123")

 console.log(userOne);