//compact way of writting a function



sum = (a,b)=>{ return a+b};


multi=(a,b)=>{
    return a*b;
}


vowels = ["a", "e", "i", "o", "u"];

function getVowels(word) {
  let result = "";
  
  for (let i = 0; i < word.length; i++) {
    // Check if the character is a vowel and not already in the result
    if (vowels.includes(word[i].toLowerCase()) && !result.toLowerCase().includes(word[i].toLowerCase())) {
      result += word[i];
    }
  }

  return result;
}

console.log(getVowels("hello world")); // Output: "eow"



// FUNCTION ASSOCIATED WITH ANY OBJECT IS KNOWN TO BE METHOD

//For each loop in arrays 

// callback is a function passed as an arguement to another function
let array=[1,2,3,4]

 array.forEach(function printValue(val){
    console.log(val.toString()
    );
    
 })

 // High order function

 // The higher order function take function as an arguement or return a fuction.



 array.forEach((value)=> console.log(value*value)
);


// Some array methods


////MAP

// creates a new array with result of some operations 
// value its callback return is used to form a new array

let x= array.map((value)=> {return value *value;})
console.log(x);

/// Expression ---> something that yields a value


// statement =--> you cannot yield a value thru it.

// continue -- keyword is used for skipping iteration.

//label statement




//     let even_valuess=[1,2,3,4,5,6,7]
//     even_valuess.filter((val)=>{
//         return val%2===0;
//     }
// )

// console.log(even_valuess);


// reduce method
// performs  some operatiosn and reduces the value to single


let marks=[20,90,86,99,105,150,54,93,95,195]

let highestScore= marks.filter(function (value){

    return value>=90;
});
console.log(highestScore);



const readline = require('readline'); // Import the readline module

const q = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let selectedNumber;
// q.question("Select a number: ", (answer) => {
//   selectedNumber = parseInt(answer);  // Convert the answer to an integer
//   q.close();

//   // Now that we have the selectedNumber, we can proceed with the loop
//   let newArray = [];
//   for (let i = 0; i <= selectedNumber; i++) {
//     newArray.push(i);
//   }
//   console.log(newArray);  // Print the array
// });

sum=array.reduce((res,curr)=>{
    return res+curr;
})

let factorial=array.reduce((res,curr)=>{
    return res*curr;
})

console.log(factorial)