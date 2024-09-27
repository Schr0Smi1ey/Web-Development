// forEach() method is used to iterate over the elements of an array and execute a provided function once for each element.
// Unlike map(), forEach() does not return a new array—it simply executes a function for each array element.

const fruits = ['apple', 'banana', 'cherry'];

// Convert each string to uppercase using forEach
fruits.forEach(function(fruit) {
    console.log(fruit.toUpperCase());
});
