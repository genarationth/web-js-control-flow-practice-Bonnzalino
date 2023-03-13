// password.length >=12
//const password = "1234567890123"

// password.length >=8
//const password = "123456789"

// password.length < 8
const password = "123"

password.length >= 12 ? console.log(`password is very strong so Welcome!!!`) 
: password.length >= 8 ? console.log(`Welcome!!!`) 
: console.log(`Sorry!! the password is too short`);