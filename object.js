//singleton constructor se banega toh


//object literals
// object.create method to create object\

const mySym = Symbol("key1")


const JsUser = {
    name : "uttakarsh",
    "Full Name": " uttakarsh pratp singh ",
[mySym]: "myKey1",// to use the symbol we use syntax[] for symbol otherwise it will display string
    age : 18,
    location: "jaipur",
    email: "uttakarsh@gmaail.com",
    isLogged: false,
    lastLoginDays : ['monday',"saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //good method

console.log(JsUser["Full Name"]) //use this sqaure notation it is good method
console.log(typeof JsUser.mySym)

JsUser.email = "uttakar@nf eok"
console.log(JsUser.email)
// Object.freeze(JsUser) //to freezee

JsUser.email = "tam fksf"
console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());