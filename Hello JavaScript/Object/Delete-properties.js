const person = {
    name: "Sarafat karim",
    age: 21,
    isMarried: false,
    job: "Student",
    'fav place': ['Dhaka', 'Chittagong', 'Sylhet']
}

console.log(person);
delete person.isMarried;
console.log(person);
delete person['job'];
console.log(person);