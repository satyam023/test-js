// Immediately invoked function expression (IIFE)
// no need polution form global scope 
// need imediate execution

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

(function chai(){
    console.log(`DB CONNECTED`);
})();  // ; -> need to stop function
// ()() , first paranthisis declare function , second call 

((port) => {
    console.log(`DB CONNECTED TWO ${port}`);
})(8080)

