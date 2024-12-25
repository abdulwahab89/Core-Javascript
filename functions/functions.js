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