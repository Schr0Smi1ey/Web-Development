const person = { id: 1, name: "John", age: 25 };

// Convert the object into a JSON string
const json = JSON.stringify(person);

console.log(person); // { id: 1, name: 'John', age: 25 }
console.log(json); // {"id":1,"name":"John","age":25}


// convert JSON string into an object

const obj = JSON.parse(json);
console.log(obj); // { id: 1, name: 'John', age: 25 }