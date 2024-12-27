// Objects: Entity having some state and behaviour (properties and methods)
// JS have special properties called prototype.
const student={
    name:"A Wahab",
    marks:99, // hope that was true.
     printMarks: function (){ console.log("marks",this.marks)},

     

}
student.printMarks();

// . this.marks  is referal to the current obj.


// we can set prototype using __proto__

let arr=["apple","mango","banana"]
console.log(typeof arr);
