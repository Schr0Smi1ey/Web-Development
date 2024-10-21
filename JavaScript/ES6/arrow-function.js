const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const difference = (a, b) => a - b;
console.log(difference(5, 3)); // 2

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

const square = a => a * a;
console.log(square(5)); // 25

const greet = () => 'Hello World!';
console.log(greet()); // Hello World!

const greetWithName = name => `Hello ${name}!`;
console.log(greetWithName('John')); // Hello John!

const getAge = (person) => person.age;
const person = { name: 'John', age: 36 };
console.log(getAge(person)); // 36


// large arrow function
const getResult = (a, b, c) => {
    const sum = a + b + c;
    const mul = a * b * c;
    const avg = sum / 3;
    return sum + mul + avg;
}

console.log(getResult(1, 2, 3)); // 14