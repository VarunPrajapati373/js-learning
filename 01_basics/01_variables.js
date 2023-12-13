const accId= 1234
let accEmail="varun@gmail.com"
var accPass = "255323"
accCity = "Lucknow"
let accState;

//accId = 2 //not allowed to change constant value

// prefer not to use var
// because of issue in block scope and functional scope

accEmail="vp@gmail.com"
accPass="242424"
accCity="bangal"

console.log(accId);
console.table([accId,accEmail,accPass,accPass,accState])