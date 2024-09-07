// Declaration of an object

let person = {
    name: "Sarafat karim",
    age: 21,
    isMarried: false,
    job: "Student",
    'fav place': ['Dhaka', 'Chittagong', 'Sylhet'] // Object property with special character
}

console.log(person);    // { name: 'Sarafat karim', age: 21, isMarried: false, job: 'Student' }
console.log(person.name);   // Sarafat karim
console.log(person.age);    // 21
console.log(person.isMarried);   // false
console.log(person.job);    // Student


console.log(person['name']); // Another way to access object property. This will needed whenever there is some special character in the object property name,which isn't accsicable by dot notation.

person.name = "Sarafat Karim Sajjad"; // Set the value of an object properties using dot notation
console.log(person.name);

person['name'] = "Sarafat Karim Sajjad Milon"; // Set the value of an object properties using bracket notation
console.log(person['name']);

// Adding new properties to an object
person.city = "Dhaka";
console.log(person);
console.log(person.city);


const places = person['fav place'];
console.log(places); // [ 'Dhaka', 'Chittagong', 'Sylhet' ]