const name = "satyam";
const repoCount = 11

// console.log( name + " " + repoCount + " Value ")

// use backstrks

// console.log(`My name is  ${name} and have a repocount of ${repoCount}`);

const gameName = new String('Satyam-Rc-yv');

/// this give object with predifined method 
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

// const anotherGame = gameName.substring(0 , 4)
// const anotherGame = gameName.substring(-6 , 4) => not 

// const anotherGame = gameName.slice(0 , 4) // same as substring
// const anotherGame = gameName.slice(-9 , 4) // 
// console.log(anotherGame)

// trim && replace 

// remove space 
// const newString = "      Satya    "
// console.log(newString)
// console.log(newString.trim());

const url = "https://satyam.com/satyam%60pandey";
// console.log(url.replace('%60', '-'))

// console.log(url.includes('satyam'))  -> true or false

console.log(gameName.split('-'));
