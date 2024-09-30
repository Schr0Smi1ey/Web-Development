// 1. Using the 'arguments' object in a function
function showArguments() {
  console.log("Number of arguments passed:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${i}:`, arguments[i]);
  }
}

showArguments(1, "hello", true, [1, 2, 3]);
// Output:
// Number of arguments passed: 4
// Argument 0: 1
// Argument 1: hello
// Argument 2: true
// Argument 3: [1, 2, 3]

console.log("--------------------------------------------");

// 2. Using the 'arguments' object in a function with defined parameters
function sumNumbers(a, b) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of arguments:", sum);
}

sumNumbers(10, 20, 30, 40); // Sum of arguments: 100
// Note: Even though the function defines only two parameters, we can still pass more arguments, and 'arguments' captures them.

console.log("--------------------------------------------");

// 3. Handling arguments using Rest parameters (ES6)
function multiply(...nums) {
  let result = 1;
  nums.forEach((num) => {
    result *= num;
  });
  console.log("Product of arguments:", result);
}

multiply(2, 3, 4); // Product of arguments: 24
// Rest parameters collect all arguments into an array named 'nums'.

console.log("--------------------------------------------");

// 4. Default parameters with arguments
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet("Alice"); // Hello, Alice!
greet(); // Hello, Guest!
// Default parameters provide fallback values if no arguments are passed or undefined is passed.

console.log("--------------------------------------------");

// 5. Mixing arguments object and rest parameters
function mixedArgs(...restParams) {
  console.log("Arguments object:", arguments);
  console.log("Rest parameters:", restParams);
}

mixedArgs(1, 2, 3, 4);
// Arguments object: { '0': 1, '1': 2, '2': 3, '3': 4 } ----> Array like object but not an array
// Rest parameters: [1, 2, 3, 4]

console.log("--------------------------------------------");

// 6. Arrow functions and arguments
const arrowFunc = () => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
};
// arrowFunc(1, 2, 3); // Arrow functions don't have their own 'arguments' object

console.log("--------------------------------------------");
