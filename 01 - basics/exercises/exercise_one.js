
// ## EXERCISE ONE
function subtract(num1,num2){
const result=num1-num2;
return result;
}

function stringify(number){
    return `Result: ${number}`;
}
const result=subtract(5,2)
console.log(`Subtraction: ${result}`);

console.log(stringify(result)); 

// #Exercise - 02

function double(num){
return num*2;
}

function transform(num, method){
    value=method(num);
    return value;

}
console.log(transform(2,double));
