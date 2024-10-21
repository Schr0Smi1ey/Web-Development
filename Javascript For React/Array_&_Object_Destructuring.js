// Array destructuring
const arr = [11, 22, 33];
const [first, second, third] = arr;

console.log(first); // 11
console.log(second); // 22
console.log(third); // 33

// Nested object with destructuring and optional chaining
const user = {
  name: "Sarafat Karim",
  age: 21,
  address: {
    city: "Khulna",
    country: "Bangladesh",
  },
  education: {
    university: {
      name: "Khulna University",
      discipline: "CSE",
    },
  },
};

// Object destructuring with nested objects
const {
  name,
  address: { city, country },
  education: {
    university: { name: uniName, discipline },
  },
} = user;

console.log(name); // Sarafat Karim
console.log(city); // Khulna
console.log(country); // Bangladesh
console.log(uniName); // Khulna University
console.log(discipline); // CSE

// Optional chaining
const user2 = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
  },
};

console.log(user2.address?.country); // undefined (without error because of optional chaining)
console.log(user2.education?.university?.name); // undefined (no error thrown)
