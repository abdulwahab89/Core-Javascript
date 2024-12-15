const accountId="21SW089"
let accountEmail="abdulwahablaghari6@gmail.com" //good for block scope and functional scope
var accountPassword="123123123" //global scope
accountCity="Hyderabad"
// accountId="21" // you cannot assign values to already defined const variable 
// console.log(accountId)
accountEmail='newemail'
accountPassword="123123123"
accountCity="KHI"
let accountState;
console.table([
    accountEmail,
    accountId,
    accountPassword,
    accountCity,
    accountState
])
