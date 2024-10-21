/*
    hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, 
    before the code is executed. However, only the declarations are hoisted, not the initializations.
*/

console.log(hoistedVar); // Output: undefined (hoisted, but not initialized)
var hoistedVar = "I am hoisted";

// console.log(letVar); // Uncaught ReferenceError: Cannot access 'letVar' before initialization
let letVar = "I am not hoisted like var";

// console.log(constVar); // Uncaught ReferenceError: Cannot access 'constVar' before initialization
const constVar = "I am also not hoisted like var";

// Hoisting with functions
hoistedFunction(); // Output: "I am hoisted function" (Function hoisting works)

function hoistedFunction() {
  console.log("I am hoisted function");
}

// Function expressions are not hoisted
// notHoistedFunction(); // Uncaught TypeError: notHoistedFunction is not a function
var notHoistedFunction = function () {
  console.log("I am not hoisted function expression");
};

// Block scope and hoisting
if (true) {
  // console.log(blockVar); // Uncaught ReferenceError: Cannot access 'blockVar' before initialization
  let blockVar = "I am block-scoped and not hoisted outside";
}
