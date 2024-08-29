function one(){
    const username = "uttakarsh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//cannpt acess beacuse of 
    // blocked scope

    two()
}

// one()

if(true) {
    const username = "uttakarsh"
    if(username === "uttakarsh") {
        const website = "uttakarsh"
        console.log(username + website);
    }
    // console.log(website); blobk scoped
}
// console.log(username);block scoped


////////////////////////////////

 