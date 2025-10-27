// Declare variables with types
let character: string = 'mario';
let age: number = 30;
let isBlackBelt: boolean = false;

// You can still reassign values, but only of the same type
character = 'luigi';     // ✅ string
// character = 20;       // ❌ Error: Type 'number' is not assignable to type 'string'

age = 40;                // ✅ number
// age = 'yoshi';        // ❌ Error: Type 'string' is not assignable to type 'number'

isBlackBelt = true;      // ✅ boolean
// isBlackBelt = 'yes';  // ❌ Error: Type 'string' is not assignable to type 'boolean'

// Function with a parameter type and return type
const circ = (diameter: number): number => {
  return diameter * Math.PI;
};

console.log(circ(7.5)); // ✅ works fine
