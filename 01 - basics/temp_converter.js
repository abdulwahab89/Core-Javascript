const readline = require('node:readline');
console.log("Enter temperature in Celcius");
r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("Enter temperature", temp => {
    const temperature=(temp*9/5)+32
    console.log(temperature);
    
    r1.close();
});
