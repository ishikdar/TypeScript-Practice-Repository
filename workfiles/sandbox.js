// arrays
var names = ["Alice", "Bob", "Charlie"];
//so lets try to push sometihng different type
//names.push(3); //this doesn't work.
//now if i try to replace something in different type
//names[0]=3; //this also doesn't work
//so to make it work we can use mixed types
var mixed = ["Alice", 25, true];
mixed.push("Bob");
mixed.push(30);
mixed.push(false);
//replace value inside mixed array
mixed[0] = "Charlie";
//so lets print the mixed array
console.log(mixed);
//this works fine
//objects
var person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
// lets change a property value 
person.name = "Bob";
person.age = 30;
//now if i try to assign different type to a property
//person.age = "thirty"; //this doesn't work
//now lets print the object
console.log(person);
