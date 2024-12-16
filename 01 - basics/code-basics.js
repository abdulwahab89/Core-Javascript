// Functions
console.log(getMyName("Wahab"));

function getMyName(name){
    return name;
}
add(4,5)
function add(num1,num2){
    const number=num1+num2;
    return number;
}
// so JS takes all functions when reading a file and then it doesnt matters if you initialize a function later in your code.
function nameWithNumber(){
    num=getMyName("wahab"),
    console.log(`final result:${num}`);
    add(80,9)
    
}
nameWithNumber()
//conversion

function convertoInt(num1,num2){
result=num1+parseInt(num2)
return result
}
console.log(convertoInt(1,"5"));
function nestedFunction(){
    value=add(2,4)
    return convertoInt(value,"5");
}
console.log(nestedFunction());
