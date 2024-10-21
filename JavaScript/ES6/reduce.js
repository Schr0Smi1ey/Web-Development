// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// It's a very powerful function that can be used to sum numbers, concatenate strings, or reduce an array into any other value or object.


const numbers = [1, 2, 3, 4, 5];

// 1. Sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// 2. Concatenate all numbers in the array
const concatenated = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(concatenated); // '12345'

// 3. Find the maximum number in the array
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(max); // 5

// 4. Find the minimum number in the array
const min = numbers.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue), Infinity);
console.log(min); // 1

// 5. Count the number of occurrences of each element in the array
const counts = numbers.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(counts); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }

// 6. Flatten an array of arrays
const nestedNumbers = [[1, 2], [3, 4], [5]];
const flattened = nestedNumbers.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // [1, 2, 3, 4, 5]

// 7. Group objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
];
