// any type
let imranVar: any;

//i can replace the value with any type
//string
imranVar = "Hello, Imran!";
console.log(imranVar);
//number
imranVar = 42;
console.log(imranVar);
//boolean
imranVar = true;
console.log(imranVar);

//any type arrays
let mixedArray: any[] = [];

//pushing different types of values
mixedArray.push(10);
mixedArray.push("TypeScript");
mixedArray.push(false);
mixedArray.push({ name: "Imran", age: 25 });

console.log(mixedArray);

//any type in objects   
let imranObject: {name: any, age: any};
imranObject = { name: "Imran", age: 25 };
console.log(imranObject);