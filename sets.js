const ids=new Set([
    1,
    2,
    3
]);
console.log(ids.has(1))
ids.add(2) // no duplication allowed.
console.log(ids)

for(const entry of ids.entries()){
    console.log(entry);
    
}
const person1={
    name:"Max",

}

personData=new Map([person1,[{
    date:"yesterday",
    purchase:"10",


}]])
personData.set("key","value"); 


// Weak sets
let person={name:'Max'}

const persons=WeakMap();

persons.add(person)