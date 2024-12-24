// for(let i=2; i<=100; i++){

//     if (i%2==0) {
//     console.log(i);
    
        
//     }
// }

let gameNum=25;
let userAnswer;
isRight=false;
do{
const readline=require('readline');
r1= readline.createInterface({
   input:process.stdin,
   output:process.stdout, 
});

r1.question("Guess",(answer)=>{
userAnswer=answer;
isRight=userAnswer==gameNum;
console.log("answer is "+isRight);
r1.close();
});
}while(isRight);