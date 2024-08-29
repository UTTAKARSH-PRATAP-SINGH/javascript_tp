//how to declare object with the help of constructor here
// const tinderUser = new Object() //singleton objet

const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    Email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "uttakarsh",
            lastname: "pratap singh"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

// const obj3 = {obj1 , obj2}//gives object eke andar object
// const obj3 = Object.assign({} , obj1 , obj2, obj4)
//{} this is for an empty array if therer are many arrays 
const obj3 = {...obj1, ...obj2} //spread and combine latest method
// console.log(obj3);

//jab database se value arhi hai

// const users = [
//     {
//         id:1,
//         email:"uttakarsh@443"
//     },
//     {
//         ...
//     }
// ]

// users.[1].Email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); console.log(Object.entries(tinderUser)); //array ke andar array  


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "uttakarsh"
}

//course.courseinstructor

const {courseInstructor : instructor} = course //destruruture horha hai object ka
  
console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "uttakarsh",
//     "coursename": "js in hindi",
//     "price": "free"
// }