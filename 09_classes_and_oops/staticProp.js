class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

   static createdId(){  // not access to everyone 
        return `123`
    }
}

const satya = new User("satyam")
// console.log(satya.createId())   not for every one

class Teacher extends User{
    constructor(username , email){
        super(username)  // this should call first , in constructor
        this.email = email
    }
}


const ip = new  Teacher("iphone", "iphone@gmail.com")

ip.logMe()
// iphone.createdId() // not to inheritance  also 



