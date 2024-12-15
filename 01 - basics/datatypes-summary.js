//primitive and non-primitve.
//call by value & call by reference.

//Primitive //VALUE DOESNT CHANGE AFTER ASSIGNED.

//7 types: String, Number, Boolean, null, undefined, symbol [unique-value], BigInt

//Reference Type - NON PRIMITIVE

//Array, Objects, Functions


//DYNAMICALLY TYPE LANGUGE ---> JAVASCRIPT.
string: name="wahab" // Type script.. Static version of JS.

//NON-PRIMITIVE Example
let person = { name: "Wahab", age: 25 };
let anotherPerson = person; // anotherPerson refers to the same object as person

anotherPerson.age = 30; // Modifying the object through anotherPerson

console.log(person.age); // Output: 30 (person is affected by the change)
console.log(anotherPerson.age); // Output: 30


const bigNumber=312333333123141241n
const id=Symbol("123")
const anotherID=Symbol("123")
console.log(id==anotherID);


heros=["Spiderman","Batman","Ironman"]
let myObj={
    name:"wahab",
    age:22
}
let anotherObj=myObj;
anotherObj.name="Name changed in value as well"
console.log(myObj.name);
console.log(anotherObj.name);


function myFunction() {
    console.log("Hello, world!");
  }
  
console.log(typeof myFunc);
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


//+++++++++++++++++++++++++++++++++++++++++++++++

// STACK (Primitive), HEAP (NON-PRIMITIVE)

let myName="wahab"
let anotherName=myName
anotherName="awahab"
console.log(anotherName);
console.log(myName);


let userID ={
     email:"awahab@gmail.com",
     pass:"123",
}
let anotherUserID=userID;
anotherUserID.email="changed with original!"
console.log(userID);
console.log(anotherUserID);

