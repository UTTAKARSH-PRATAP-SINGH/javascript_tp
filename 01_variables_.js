const accountId =  144553
let accountEmail = "uttakarsh405@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;



// accountId = 2// this can be analyzed by node js not allowed
console.log(accountId); 


accountEmail = "hc@c.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.log(accountId)

/*
prefered not to use var
because of issues in block and fucntional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])