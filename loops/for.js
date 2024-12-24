// Reverse array
array=[1,2,3,4,]
newArray=[]
for (let index = 0; index <=array.length-1; ++index) {
   newArray[index]=[array.length-index] 
 }
 console.log(newArray);
 

 for(const logEntry of array){
console.log(logEntry);
 } // creates new variable log entry at every iteration unlike let.
 

 let data="Because string is a array";

 for(i of data){
    console.log(i);
    
 }
 

 i=0;

 for(V of i){
    console.log(v);
    
 } // syntax error, not iterable ((for-of only works for arrays,maps, lists ))