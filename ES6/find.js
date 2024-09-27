// find() method returns the first element in an array that satisfies the provided testing function.
// Unlike filter(), which returns all matching elements, find() returns only the first match.
// If no element passes the test, it returns undefined

const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // 2