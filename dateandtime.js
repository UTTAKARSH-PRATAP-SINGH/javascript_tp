let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()//TH IS USED FOR QUIZEZ FOR CERTIFYING THE WINNERS ACC TO TIME

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `using string coaliton here`

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default'),{
    weekday: "long",
}
