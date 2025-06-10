// Feature	            Object Literal	                Singleton Pattern
// Definition style	    Simple {}	                    Function or class with controlled instance
// Instances allowed	Multiple (if you define them)	Only one
// Reusability	        Not reused automatically	    Shared across whole application
// Use case	            When you just need an object	When one global config/object is needed
// ControlOverCreation	No — every time it's new	     Yes — only one created via closure or static var

// 🧠 Conclusion
// Object literal: just syntax to create an object.
// Singleton: a design pattern ensuring only one instance exists — it can be created using a literal, but it's the controlled access that makes it a singleton.

// when you define by {} literals singelton not form 
// define using constructor method Object.create -> form singleton


// Object literal 
const mySym =  Symbol("key1");
const JsUser = {
    name: "satyam",
    "full name": "Satyam Pandey",
    [mySym]: "mykey",
    age: 18,
    location: "Bhopal",
    email: "satyam@gmail.com",
    isLoggedInn: false,
    lastloginDays: ["Monday" , "SAturday"]
}



// can be access using two types 
// .(dot) method [] (square) method 
// in case "full name " and symbol define in object 
// can access only [ ] sq method 
// as name originaly save as "name" 
// when define symbol first create and define using [sq] braces
// to access no string in [] just define name 


// console.log(JsUser.email)
// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"]) // no other method to access
// console.log(JsUser[mySym])// no other method to 

// directly you can change value of object 
//to prevent change in object 
// Object.freeze(JsUser);
// JsUser.caste = "Pandey";
// console.log(JsUser)

  // add function in object 
  // functio n is just like variable 
  JsUser.greeting = function(){
    console.log("Hello Js user");
  }

//   console.log(JsUser.greeting) -> return [Function (anonymous)]
//   console.log(JsUser.greeting()) -> call function

// two refrecne same object use "this" key word 

JsUser.greetingTwoArrow = () => {
    console.log(`Hello Js User , ${this.name}`);
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}

// console.log(JsUser.greetingTwoArrow())
// console.log(JsUser.greetingTwo())

// Hello Js User , undefined  , in case of arrow function " this" is global this
// undefined
// Hello Js User , satyam , in this case , "this" represent object in key define 



//+++++++++++++++++++++++++++++++++++++++++++++//

  // singleton

  // const tinderUser = new Object()
  const tinderUser = {}

  tinderUser.id = '123abc'
  tinderUser.name = "Sammy"
  tinderUser.isLoggedIn = false

  // console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstname: "satyam",
      lastname: "pandey"
    }
  }
}

// console.log(regularUser.fullname?.userFullName?.firstname)

// using assign combine two or more object 
// assign take target and souce two parameter generally target is { empty object  means contail all key value of sources if not give as empty object then note tah first object store value of all object }

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
// const obj3 = Object.assign(obj1 , obj2)
// const obj3 = Object.assign( {}, obj1 , obj2)
// console.log(obj1);
// console.log(obj3);
// in both cases answeer is same in first all merge on obj1 
// in second obj3 is new obj

// use spread

const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))  //  array of each( key value pair in array )
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true false -> true
// console.log(tinderUser.hasOwnProperty('isLoggedIn').isLoggedIn) // undefined
// important method store in array 


/// destructuring of object

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// insted of course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor) if courseInstructor: instructor using this then this make error 
// console.log(instructor)

// Api = mjdur 
// api return json data now later it return xml 

// api can return data in objects or array of objects  
