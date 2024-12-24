// console.log(parseInt("12wahab"));
// console.log(parseInt("wahab"));
// console.log(parseInt("1+2"));
// console.log(parseInt("1"+"2"));
// console.log(isNaN("f"));
/*

    *
   ***
  *****
 ********
**********
*/
for (let index = 0; index < 5; index++) {
    // Print spaces
    for (let t = 0; t < 5 - index - 1; t++) {
      process.stdout.write(" ");
    }
  
    // Print stars
    for (let j = 0; j < 2 * index + 1; j++) {
      process.stdout.write("*");
    }
  
    // Move to the next line
    console.log();
  }
  