//for immediatily invoked fuction

(function chai() {
    console.log("db connected")
}()); //functon invoke wala confuse higya tha therfore use semicolon

//()() fucntion defn the execution
// global scope kesolution se probl hoti hai kaibar toh is global ki jo bhi declaration hai usko hatane ke liye  we use this

//using array funt

( (name) => {
    console.log(`db got connected ${name}`);
})('uttakarsh')