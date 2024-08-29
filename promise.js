 const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log("promise consumed")
 })

 new Promise(function(resolve,reject){
   setTimeout(function(){
      console.log("async task 2");
      resolve()
   },1000)
 }).then(function(){
   console.log("asyinc 2 resolved")
 })

 const promiseThree = new Promise(function(resolve,reject){
      setTimeout(function(){
         resolve({Username:"chai",email:"chai@chai.com"})
      },1000)
 })
 promiseThree.then(function(user){
   console.log(user)
 })

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;//true 

        if (!error) {
            resolve({ Username: "uttakarsh", password: "123" }); // Corrected here
        } else {
            reject('error: something went wrong');
        }
    }, 1000);
});

// Example of how to use the promise
promiseFour
    .then(function(data) {
        console.log('Success:', data);
    })
    .catch(function(err) {
        console.error(err);
    });

    promiseFour.then((user)=>{
      console.log(user);
      return user.Username
    }).then((username)=>{
      console.log(username)
    }).catch(function(error){
         console.log(error)
    }).finally(() => console.log("the promise is either resolve or rejected"))


    const promiseFive = new promise(function(resolve,reject){
      setTimeout(function() {
         let error = true;//true 
 
         if (!error) {
             resolve({ Username: "javascript", password: "123" }); // Corrected here
         } else {
             reject('error: js went wrong');
         }
     }, 1000);

    })

   //  async function consumepromiseFive(){
   //    const response = await promiseFive
   //    console.log(response);
   //  }
   //  consumepromiseFive()


   // try catch

   // async function consumepromiseFive(){
   //    try{
   //       const response = await promiseFive
   //       console.log(response);
   //    }catch(error){
   //       console.log(error);
   //    }
   // }

   // consumepromiseFive()

   async function getAllUsers(){
      const response = await fetch('htts://jsonplaceholder.typicode.come/users')
      const data = response.json()
      console.log(data)
   }
   getAllUsers()

   