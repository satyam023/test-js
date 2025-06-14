class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
};

const chai = new Teacher("chai" , "chai@teacher.com", "123")

console.log(chai)

// to check instance 
console.log(chai instanceof Teacher)
console.log(chai instanceof User)