// Coercion between primitives
let num = 5;
let str = "10";

let result1 = num + str; // '5' is coerced to '5' and concatenated
console.log(result1); // Output: '510'

let result2 = num * str; // '10' is coerced to 10 (number) and multiplication happens
console.log(result2); // Output: 50

let result3 = false + 1; // false is coerced to 0, then added to 1
console.log(result3); // Output: 1

// Coercion with non-primitives (objects)
let obj = { valueOf: () => 5 }; // Custom object that behaves like a number
let result4 = obj + 10; // obj is coerced to 5 using valueOf()
console.log(result4); // Output: 15
