// Slice

const Name = "Sarafat Karim";
const sliceName = Name.slice(2, 5); // slice(start index, after end index) ---> slice(2,5) = 2,3,4
console.log(sliceName); // raf

// split

const fullName = "Sarafat Karim Sajjad Milon";
const nameArray = fullName.split(" "); // split --> this will split the whole string whereever it founds the given parameter and store them as an array
console.log(nameArray);

const test = "Hi,this,is,Sarafat,Karim";
const testArray = test.split(',');
console.log(testArray);

// join

const joinArray = nameArray.join(" "); // join --> this will join the array elements with the given parameter and return as string
console.log(joinArray);

// concat

const firstName = "Sarafat";
const lastName = "Karim";
let fullNameConcat = firstName.concat(" ", lastName); // concat --> this will concat the given parameters and return as string   
fullNameConcat = fullNameConcat.concat(" ").concat("Sajjad").concat(" ").concat("Milon"); 
console.log(fullNameConcat);


// includes

console.log(fullName.includes("Sarafat")); // true
