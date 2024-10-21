// what is map?
//the map() function is used to create a new array by applying a function to each element of an existing array. It doesn’t modify the original array but returns a new one.

// map with normal function

function add(num) {
    return num += 2;
}
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(add);

console.log(newNumbers); // [3, 4, 5, 6, 7]



// map with arrow function
const newNumbers2 = numbers.map(num => num + 2);
console.log(newNumbers2); // [3, 4, 5, 6, 7]


const names = ['sarafat', 'karim', 'sajjad', 'milon'];
const newNames = names.map(name => name[0]);
console.log(newNames); // ['s', 'k', 's', 'm']