let subject = "chemistry";
let exam = "Chemistry";

if (subject == exam) {
    console.log("Today is my exam");
}
else {
    console.log("Today is not my exam");
}

console.log(subject.toLowerCase());
console.log(exam.toLowerCase());
console.log(exam.toUpperCase());
console.log(subject.toUpperCase());


if (subject.toLowerCase() == exam.toLowerCase()) {
    console.log("Today is my exam");
}

if (subject.toUpperCase() == exam.toUpperCase()) {
    console.log("Today is my exam");
}


let name = "    John Doe    ";
console.log(name);
console.log(name.trim()); // remove white spaces from both sides of the string