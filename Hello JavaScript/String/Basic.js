// Ways to declare a string in JavaScript
const country = 'Bangladesh';
const city = "Dhaka";
const area = `Mirpur`;
const thana = new String('Nangolkot'); // It's an object of string type

console.log(country);
console.log(city);
console.log(area);
console.log(thana);


let name = 'Sarafat karim';
console.log(name.length);
console.log(name[0]);
name[0] = 'M'; // It will not change the value of name
console.log(name); // Sarafat karim  -------> Means in javascript string is immutable 
