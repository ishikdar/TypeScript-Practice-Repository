//explicit types
var character;
var age;
var isLoggedIn;
//age = 'luigi' // error
age = 30;
//character = 20; // error
character = 'mario';
//isLoggedIn = 25; // error
isLoggedIn = true;
//arrays
var ninjas = [];
ninjas.push('shaun');
//ninjas.push(20); // error
//union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
//mixed.push(false); // error
console.log(mixed);
var uid;
uid = '123';
uid = 123;
//uid = false; // error
//objects
// this is generic object type
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
//ninjaOne = 'hello'; // error
//ninjaOne = 20; // error
// this is specific object type
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//ninjaTwo = { name: 'mario', age: 20 }; // error
//ninjaTwo = { name: 'mario', age: '20', beltColor: 'black' }; // error
