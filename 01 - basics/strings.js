const name="AWAHAB"
const dept="SWE"

console.log(`Hello, I'm ${name}, student of ${dept}`);

const value=String("WAHAB")
console.log(value[0]);
console.log(value.length);

console.log(value.charAt(4))
newVal=value.substring(0,4)
console.log(newVal)


const anotherString=value.slice(-4,4)
console.log(anotherString);
const newStringOne="        wahab       "
console.log(newStringOne.trim());
const url="https://website.com/wahab%20baig"
console.log(url.replace('%20','-'))  
console.log(
    url.includes('w'));
console.log(url.split('-'));
