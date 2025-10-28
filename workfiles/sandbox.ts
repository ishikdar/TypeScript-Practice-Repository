//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi' // error

age = 30;

//character = 20; // error

character = 'mario';

//isLoggedIn = 25; // error

isLoggedIn = true;

//arrays
let ninjas: string[] = [];

ninjas.push('shaun');
//ninjas.push(20); // error

//union types
let mixed: (string | number)[] = [];
    
mixed.push('hello');
mixed.push(20);
//mixed.push(false); // error
console.log(mixed);

let uid: string | number;

uid = '123';
uid = 123;
//uid = false; // error

//objects
// this is generic object type
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
//ninjaOne = 'hello'; // error
//ninjaOne = 20; // error

// this is specific object type
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//ninjaTwo = { name: 'mario', age: 20 }; // error
//ninjaTwo = { name: 'mario', age: '20', beltColor: 'black' }; // error