const accountID= 4554
let email = "noel@gmail.com"
var pwd= "12345"
accountCity = "Hyderabad"
let accountState


// accountID=2
 pwd = "234567890"

console.log(accountID); // error

console.table([accountID, pwd, email, accountCity, accountState])


// You cannot change const variable value, or reassign any other value

// var has scope issues
// use let or const
// avoid not using anything, like accountCity
// any variable that is not given a value it is undefined.