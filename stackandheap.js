//memories -----------stack(primitive ek copy value milti hai jisme change hota hai) 
// and heap(non primitive isme original value me hi change hota hai)


//  let myYoutubename = "hiteshchoudharydot.com"

//  let anothername = "chaiaurcode"
//  anothername = "chaiaurcode" //yaha stack mem me ek copy gaya hai air wha value change hui hai

//  console.log(myYoutubename);
//  console.log(anothername);


 let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "hitesh@google.com"

 console.log(userOne)
 console.log(userTwo) //same value dikharha hai matlb heap memory refrence krta hai no change in orignal memory

