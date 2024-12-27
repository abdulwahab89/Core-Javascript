// Javascript registers the function on top as globally on code execution.
// you can call the function before you declare them..


//Function expression is storing a fuction in a variable.
// You cannot call the function before you declare them.

// const startBtn=document.getElementById("start-game-btn");
// const ROCK= 'ROCK'
// const PAPER='PAPER'
// const SCISSORS='SCISSORS'
// startBtn.addEventListener("click", function start(){
// console.log("Game is starting...");

// })

// const getPlayerChoice = function(){
//     const selected=prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}`," ".toUpperCase)
//     if (selected!='Rock' && selected!='Paper' && selected!='Scissors') {
//         alert('Invalid choice!  We chose Rock for you')
        
//     }
// }



  const sumUp=(...numbers)=>{
return numbers;
  } //rest paramets , merges all the arguements into one.

console.log(
    sumUp(1,2,2,3,4)
  );


  // another way is using arguements keyword, that takes all the arguements passed and merges them into a single array like object

  const subtract=
  function (){
    for (const element of arguments) {
        return arguments;
    }
      } 
    
console.log(subtract(1,2,3));
