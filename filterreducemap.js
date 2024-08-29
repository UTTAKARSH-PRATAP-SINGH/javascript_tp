const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item) => {
    // console.log(item);
        return item
})
// console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNums.filter((num) => num>4) //arrow function filter
//   console.log(newNum)

// using filter as a block scope require a return to return a value

// const newNum = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNum)

//by conditionals

// const newNums = []
// myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

//map

// const myNumbers =  [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums)

//chaining method in map filter

const myNumbers =  [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num)=>num>=40)
                // console.log(newNum)

//reduce method

const myNums = [1,2,3]
const myTotal = myNums.reduce(function(ACC,CURRval){
    console.log(`acc:${ACC} and currval: ${CURRval}`)
    return ACC + CURRval
},0)
console.log(myTotal)