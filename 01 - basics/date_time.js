let myDate=new Date();
console.log(`Current date:${myDate.toString()} `)
console.log(`Current hours :${myDate.getHours()} `)
console.log(`Current Time:${myDate.toLocaleTimeString()}`)
let currentData=Date.now()
const options={
    timezone:'America/New_York',
    timeZoneName:'short',
}
console.log(new Intil.DateTimeFormat('en-US',options).format(date))

