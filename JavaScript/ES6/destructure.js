// 1. Array Destructuring
const numbers = [1, 2, 3, 4];
const [a, b, c] = numbers;
console.log('Array Destructuring:');
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping values in array destructuring
const [first, , third] = numbers;
console.log('Skipping values:');
console.log(first); // 1
console.log(third); // 3

// 2. Object Destructuring
const person = {
  name: "Sarafat",
  age: 22,
  country: "Bangladesh"
};
const { name, age } = person;
console.log('Object Destructuring:');
console.log(name); // Sarafat
console.log(age); // 22

// Renaming variables in object destructuring
const { name: userName, age: userAge } = person;
console.log('Renaming variables:');
console.log(userName); // Sarafat
console.log(userAge); // 22

// 3. Default Values
const [x, y, z = 3] = [1, 2];
console.log('Default values in array:');
console.log(z); // 3

const personWithNoAge = { name: "Sarafat" };
const { age: ageWithDefault = 20 } = personWithNoAge;
console.log('Default values in object:');
console.log(ageWithDefault); // 20

// 4. Nested Destructuring
const user = {
  name: "Sarafat",
  address: {
    city: "Khulna",
    country: "Bangladesh"
  }
};
const {
  address: { city, country }
} = user;
console.log('Nested Destructuring:');
console.log(city);    // Khulna
console.log(country); // Bangladesh


// 5. Rest in Destructuring
// Array Rest
const [firstNumber, ...restNumbers] = numbers;
console.log('Array Rest:');
console.log(restNumbers); // [2, 3, 4]

// Object Rest
const { name: personName, ...restPerson } = person;
console.log('Object Rest:');
console.log(restPerson); // { age: 22, country: "Bangladesh" }
