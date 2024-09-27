const car = { brand: 'Tesla', model: 'Model S', year: 2023 };

// 1. Object.keys()
// Note: Returns an array of the keys (property names) of an object.
const keys = Object.keys(car);
console.log('Keys:', keys); // ['brand', 'model', 'year']

// 2. Object.values()
// Note: Returns an array of the values of the object's properties.
const values = Object.values(car);
console.log('Values:', values); // ['Tesla', 'Model S', 2023]

// 3. Object.entries()
// Note: Returns an array of key-value pairs, where each pair is an array [key, value].
const entries = Object.entries(car);
console.log('Entries:', entries); // [['brand', 'Tesla'], ['model', 'Model S'], ['year', 2023]]

// 4. delete
// Note: The `delete` operator removes a property from an object.
delete car.year; 
console.log('After delete:', car); // { brand: 'Tesla', model: 'Model S' }

// 5. Object.seal()
// Note: `Object.seal()` prevents the addition or deletion of properties, but allows modification of existing properties.
const user = { name: 'Sarafat', age: 22 };
Object.seal(user);
user.age = 23;  // Modification allowed
delete user.name;  // Deletion not allowed
user.country = 'Bangladesh';  // Adding new properties not allowed
console.log('Sealed object:', user); // { name: 'Sarafat', age: 23 }

// 6. Object.freeze()
// Note: `Object.freeze()` prevents any changes to the object. No properties can be added, deleted, or modified.
const frozenUser = { name: 'Sarafat', age: 22 };
Object.freeze(frozenUser);
frozenUser.age = 23;  // Modification not allowed
delete frozenUser.name;  // Deletion not allowed
frozenUser.country = 'Bangladesh';  // Adding new properties not allowed
console.log('Frozen object:', frozenUser); // { name: 'Sarafat', age: 22 }
