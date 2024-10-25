// export default const add = (a, b) => a + b; // ---> First way to export

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divideTheFirstNumberByTheSecondNumber = (a, b) => a / b;

// export default add; // ---> Second way to export
// export { add } // --  an object with a key-value pair of the function name and the function itself(add: add)
export { add, multiply, divideTheFirstNumberByTheSecondNumber }; // --  an object with key-value pairs of the function names and the functions themselves(add: add, multiply: multiply)
