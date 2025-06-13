 const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") 

// //  console.log(Math.PI)
//  console.log(descriptor)
//     Math.PI.writable = true
//     Math.PI = 4
//     console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailabe: true,
     
    orderChai: function(){
        console.log("Code fatega")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// chai.name = "tea"
// console.log(chai.name);

// for (let [key , value] of chai ){
//     console.log(key);
// }   chai is not iterable 

for (let [key , value] of Object.entries(chai)  ){
    console.log(`${key}: ${value}`);
} 