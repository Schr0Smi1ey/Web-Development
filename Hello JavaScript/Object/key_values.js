let person = {
    name: "Sarafat karim",
    age: 21,
    isMarried: false,
    job: "Student",
    'fav place': ['Dhaka', 'Chittagong', 'Sylhet']
}

const keys = Object.keys(person);
console.log(keys); // [ 'name', 'age', 'isMarried', 'job', 'fav place' ]

const values = Object.values(person);
console.log(values); // [ 'Sarafat karim', 21, false, 'Student', [ 'Dhaka', 'Chittagong', 'Sylhet' ] ]