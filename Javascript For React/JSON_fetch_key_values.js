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

const userJSON = JSON.stringify(user);
console.log(userJSON);

const userJS = JSON.parse(userJSON);
console.log(userJS);

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data.forEach((user) => console.log(user.name)));


// Key and Values
const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);


// Operation on each element
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});

const modified = arr.map((element) => (element += 10));

// for of ---> On array like object
// for in ---> loop on an object


// Adding or remove elements from an array

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Mobile", price: 200 },
  { id: 3, name: "Watch", price: 20 },
]
console.log(products);

const newProduct = { id: 4, name: "Headphone", price: 50 };
const productsCopy = [...products, newProduct];
console.log(productsCopy);

// Create a new array without the specified element

const filteredProducts = products.filter((product) => product.id !== 2);
console.log(filteredProducts);