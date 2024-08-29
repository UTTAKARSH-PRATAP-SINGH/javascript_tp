const name = "uttakarsh"
const repoCount = 50

console.log(name + repoCount + "value"); //syntax is poor and outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string intercoaition

const gameName = new String('uttakash') // strings formation GIVES WITH KEY VALUE PAIRS

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); //( ) this is like a function invoke
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4)
console.log(newString); //(start and end)

const anotherString = gameName.slice(2,4)
console.log(anotherString) 

const newStringOne =  "           uttakarsh    "
console.log(newStringOne)
console.log(newStringOne.trim())

// const newString2 = "MAU"
// console.log(newString2)
// console.log(newString2.replace('n','2'))


const url = "https://uttakarsh.com/uttakarsh%20pratap"
console.log(url.replace('%20','-'))

console.log(url.includes('hi'))

// strings to array

console.log(gameName.split('tt',2))