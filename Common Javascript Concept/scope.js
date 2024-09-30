// Global scope
let globalVar = "I am global";

function demoFunctionScope() {
  // Function scope
  let functionVar = "I am inside a function";

  console.log(globalVar); // Accessible, because it's in the global scope
  console.log(functionVar); // Accessible, because it's declared inside this function

  // Block scope
  if (true) {
    let blockVar = "I am inside an if block";
    console.log(blockVar); // Accessible, because it's inside the block
  }

  // console.log(blockVar); // Error: blockVar is not defined, because it's block-scoped
}

demoFunctionScope();

// Global scope
console.log(globalVar); // Accessible, because it's global
// console.log(functionVar); // Error: functionVar is not defined, because it's function-scoped

function testVarKeyword() {
  if (true) {
    var varScoped = "I am function-scoped because of 'var'";
  }
  console.log(varScoped); // Accessible, 'var' is function-scoped, not block-scoped
}

testVarKeyword();
// console.log(varScoped); // Error: varScoped is not accessible outside the function
