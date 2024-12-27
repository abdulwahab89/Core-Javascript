// for(let i=2; i<=100; i++){

//     if (i%2==0) {
//     console.log(i);
    
        
//     }
// }


sum=0;

studentMarks=[85,97,44,37,76,60]

for(const i of studentMarks){
    sum+=i;
}
console.log(sum/(studentMarks.length));


let beforePrice=[250,645,300,900,50];

let afterPrice=[];

for(var x of beforePrice){
    x= x- (x/10)
    afterPrice.push(x)
}

console.log(afterPrice);


//concat join two arrasys and returns


//slice return a piece of the array

// splice change original array (add,remove,replae)


// unshift add to start

//shift delete from start and return


array=["BMW","Ferrari","Bentley","Rolls Royce"]

array.shift();

console.log(array); // remove first


array.splice(3,0,"Tesla")
console.log(array);


array.push("Jaguar")
console.log(array);



