let person = {
    name: "Sarafat Karim",
    age: 21,
    isMarried: false,
    job: "Student",
    'fav place': ['Dhaka', 'Chittagong', 'Sylhet'],
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}


console.log(person);   // { name: 'Sarafat karim', age: 21, isMarried: false, job: 'Student' }
console.log(person.name);  // Sarafat karim
console.log(person.age);   // 21
console.log(person.isMarried);  // false
console.log(person.job);   // Student
console.log(person['fav place'][0]); // Dhaka
console.log(person.address.city); // Dhaka
console.log(person.address.country); // Bangladesh