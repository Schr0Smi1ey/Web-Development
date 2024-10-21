// 1. Math.min(): Finds the smallest value among given numbers.
const minVal = Math.min(1, 2, 3, 4, 5);
console.log('Min:', minVal); // Output: 1

// 2. Math.max(): Finds the largest value among given numbers.
const maxVal = Math.max(1, 2, 3, 4, 5);
console.log('Max:', maxVal); // Output: 5

// 3. Math.ceil(): Rounds a number up to the nearest integer.
const ceilVal = Math.ceil(4.3);
console.log('Ceil:', ceilVal); // Output: 5

// 4. Math.floor(): Rounds a number down to the nearest integer.
const floorVal = Math.floor(4.7);
console.log('Floor:', floorVal); // Output: 4

// 5. Math.round(): Rounds a number to the nearest integer.
const roundVal = Math.round(4.5);
console.log('Round:', roundVal); // Output: 5

// 6. Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).
const randomVal = Math.random();
console.log('Random (0 to 1):', randomVal); // Output: Random number between 0 and 1

// Generate a random number between 0 and 10
const randomBetween0And10 = Math.floor(Math.random() * 10);
console.log('Random (1 to 10):', randomBetween0And10); // Output: Random integer between 0 and 10

// Generate a random number between 1 and 10
const randomBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log('Random (1 to 10):', randomBetween1And10); // Output: Random integer between 1 and 10

// Generate a random integer number between 0 and 10
const randomIntBetween0And10 = Math.floor(Math.random() * 10);
console.log('Random (1 to 10):', Math.round(randomIntBetween0And10)); // Output: Random integer between 0 and 10


// 7. Math.pow(): Returns the value of a number raised to the power of another number.
const powVal = Math.pow(2, 3);
