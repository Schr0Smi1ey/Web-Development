const products = [
  { name: "laptop", price: 32000, brand: "hp", color: "silver" },
  { name: "phone", price: 12000, brand: "samsung", color: "black" },
  { name: "watch", price: 4000, brand: "casio", color: "golden" },
  { name: "sunglass", price: 2000, brand: "ray-ban", color: "black" },
  { name: "camera", price: 15000, brand: "canon", color: "black" },
];

const brands = products.map((product) => product.brand); // the map method returns a new array with the results of calling a function for every array element
console.log(brands);

products.forEach((product) => {
  // the forEach method calls a function once for each element in an array and it doesn't return anything
  console.log(product.price);
});

const expensive = products.filter((product) => product.price > 10000); // the filter method creates a new array with all elements that pass the test implemented by the provided function
console.log(expensive);

const canon = products.find((product) => product.brand === "canon"); // the find method returns the value of the first element in the provided array that satisfies the provided testing function
