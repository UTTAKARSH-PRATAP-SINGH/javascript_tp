function sayMyName(){
    console.log("u")
    console.log("t")
    console.log("t")
    console.log("a")
    console.log("k")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")

}

sayMyName() //parecases is for execution

// function addTwoNumbers(number1, number2){ //here mumber2 are parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return number1 + number2
}
const result = addTwoNumbers(3,5)// function call arguments

// console.log("result: ",result);

  function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
  }

  // console.log(loginUserMessage("uttakarsh"))
  // console.log(loginUserMessage())

//rest operator  ... triple dots function me multiple value aise pas hota hai like parameter pass
  function calculatorCartPrice(...num1){
    return num1
  }
  console.log(calculatorCartPrice(200,400,800))


  const user = {
    username: "uttakarsh",
    price: 199
  }
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }
  // handleObject(user)
  handleObject({
    username:"sam",
    price:999
  })
  const myNewArray = [200,300,800,500]

  function returnSecondValue(getArray){
    return getArray[1]
  }
  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,300,800,500]));