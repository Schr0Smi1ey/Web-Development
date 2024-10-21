// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It’s used when you need to extract elements from an array based on a condition.

const numbers = [1, 2, 3, 4, 5];
const evenNumbersArrow = numbers.filter(num => num % 2 === 0);
console.log(evenNumbersArrow); 
