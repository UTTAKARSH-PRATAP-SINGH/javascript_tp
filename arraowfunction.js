const user = {
    username: "uttakarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `); 
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sum"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "uttakarsh"
//     console.log(this).username;
// }
// chai()/


// const chai = function (){
//     let username = "uttakarsh"
//     console.log(this.username); 

// }

const chai = () => {
    let username = "uttakarsh"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
//impicit reutun
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2) //bracket also method
const addTwo = (num1,num2) => ({username: "uttakarsh"}
)//for accessing objecrt
console.log(addTwo(3,4))

