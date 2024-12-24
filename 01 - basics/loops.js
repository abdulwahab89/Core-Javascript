for(let i=1; i<=1000; i++){
console.log("I am number "+i);
if(i==100){
    break;
}
}
let array=["12","21","31"]
for(const el of array){
    console.log(el);
    
} // for every element in array
let map={
    name:"wahab",
age:20,
cgpa:3.8,
} // for every key in map

for (const key in map) {
    console.log(key);
    
}
/* 
*
**
***
****  */

for(let i=1; i<=4; i++){
for (let j =0; j <i; j++){
    process.stdout.write("*");
}
console.log();

    
}


