

if(true){
let a = 10 ;
const b = 20 ;
var c = 30 ;
}


// console.log(a)  gives error
// console.log(b)  ggives error 
// console.log(c)   print 30 which is not good 

// scope in browser console and scope in code check using node are two differnt things


// nested scope 
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // two();
    // console.log(website);
}

// one();

// closure 
// A closure is a function that remembers the variables from its lexical scope, even after that scope has exited.
// Lexical scope means that the scope of a variable is determined by its position in the source code (not by how or where the function is called at runtime).
// ✅ Definition:
// A closure is created when a function is defined inside another function and accesses variables from the outer function.

// +++++++++++++++++++++//

// Intersting


// way 1 to declare function  in this can acces before declartion 
addOne(5)
function addOne(num){
    return num + 1
}


// way 2 to declare a function 
// in js variables can hold any things
 // not access before declaretion as store in variable 
const addTwo = function(num){
    return num + 2

}
addTwo(5) 