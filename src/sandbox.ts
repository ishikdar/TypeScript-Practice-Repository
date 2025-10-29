// functions

//we can declare a function then we can specify statement

let greet: Function;
greet = () => {
  console.log("Hello, TypeScript!");   
}

//or we can declare a function with parameters

let add= (a: number, b: number, c: number=10) => {
    //here ? indicates that the parameter is optional
    //c has a default value of 10
    
    console.log(a + b + c);
}

add(5, 15); // Outputs: 30
add(5, 15, 25); // Outputs: 45


// functions with return types

let multiply = (x: number, y: number): number => {
    return x * y;
}

let result = multiply(5, 4);
console.log(result); // Outputs: 20