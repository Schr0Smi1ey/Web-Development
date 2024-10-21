const user = {
    name: "Sarafat Karim",
    age: 21,
    address: {
        city: "Khulna",
        country: "Bangladesh",
    },
    education: {
        university: {
        name: "Khulna University",
        discipline: "CSE",
        },
    },
}

console.log(user.name); // Sarafat Karim
console.log(user.age); // 21
const education = user['education'];
console.log(education);