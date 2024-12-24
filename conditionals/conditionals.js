let value;
function makeValue(){
if(2<4){
value=true;
}else{
    value=false;
}
}
makeValue();
console.log(value? "True":"False");
let gender="both";

function checkIfGay(gender){
if(gender=="Male"){
    return false;
}else if(gender=="Female"){
    return false;
}
else{
    return true;
}
}
console.log(checkIfGay(gender));

/// Conditionals for Objects & Arrays

// If you compare the two objects with same values, it will return false!
// # Here's an example of this.

let person1={
    name:'Wahab'
}
let person2={
    name:'Ahmed'
}

console.log(person1==person2,person1===person2); //returns false!

// # Same is the case with the arrays!

let fruit_basket=["Mango","Apple","Dates"]

let fruit_basket2=["Mango","Apple","Dates"]

console.log(fruit_basket==fruit_basket2,fruit_basket===fruit_basket2); // returns false as well!

let isAdmin=false;
let userName="John";
let age=30;

function login(){
  if(userName=="John" && age==30 || isAdmin){
    return "Login granted";
  }  else{
    return "Access denied - you are not a admin as well!";
  }
}
console.log(login());


//################# Truthy and falsy values ##########################

// let numberValue=2;
// if(numberValue){   // The dataype is converted to 0 or 1 to represent true or false!

//     console.log("TRUE");  
    
// }else{
// console.log("False");

// }

let str="HELLO WORLD"

let str2=null;
if(!str){ 
    console.log("TRUE");

}
else{
    console.log("False");
    
}


if(!str2){
    console.log("True because STR is  null");
}

// # Empty string is treated as false!
// # Non=empty string is treated as true
// # Objs and Array always true!
// # NAN , UNDEFINED & NULL --> FALSE
let n=0;
let counter=0;
n+counter++;