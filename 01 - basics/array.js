let logEntries=[]
let anotherArray=[]
function add(data){
    logEntries.push(data);
    return logEntries;
}
function getArray(array){
    console.log(array);
}
add("1")
add("2")
add("1")
add("2")
add("1")
add("2")
add(1)
add(anotherArray)
add("2")
getArray(logEntries)
console.log(logEntries[1]);
