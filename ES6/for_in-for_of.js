const car = { brand: 'Tesla', model: 'Model S', year: 2023 };
const numbers = [1, 2, 3, 4, 5];

// 1. for-in
// Note: `for-in` loops over the keys (property names) of an object or the indices of an array.
console.log('For-in with object:');
for (let key in car) {
  console.log(`${key}: ${car[key]}`); // brand: Tesla, model: Model S, year: 2023
}

console.log('For-in with array:');
for (let index in numbers) {
  console.log(`Index ${index}: ${numbers[index]}`); // 0: 1, 1: 2, 2: 3, ...
}

// 2. for-of
// Note: `for-of` loops over the values of an iterable, like arrays, strings, or Maps. It cannot be used on objects directly.
console.log('For-of with array:');
for (let num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}

const str = "Tesla";
console.log('For-of with string:');
for (let char of str) {
  console.log(char); // T, e, s, l, a
}
