//Boolean Coercion => !! -> Reverse negation -->  false value to truthy

// !!"" 1!!

//Default value assignment via OR operator
let someNumber="wahab";
const name=someNumber || "Max" //OR operator assign the value which is true at first.

let isLoggedIn= someNumber && "Fast" //And operator always returns the last value, since it reads the both inputs of data to them to be true.
console.log(isLoggedIn);


const userInput=''

const isValidInput=!!userInput //convers the type of string to boolean.
console.log(isValidInput);

let isLoggedInValue=true;
const cart=isLoggedInValue && ["Books"]

//let isLoggedInValue=false;
// const cart=isLoggedInValue && ["Books"]

