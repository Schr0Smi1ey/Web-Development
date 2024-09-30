// Loose equality and type coercion
console.log(5 == "5"); // true, because '5' is coerced to 5 (number)

console.log(true == 1); // true, because true is coerced to 1 (number)

console.log(false == 0); // true, because false is coerced to 0 (number)

console.log(null == undefined); // true, as both are loosely equal

console.log([1, 2] == "1,2"); // true, because the array is coerced to string '1,2'



// Strict equality, no type coercion
console.log(5 === '5'); // false, because the types are different (number vs string)

console.log(true === 1); // false, because true is a boolean and 1 is a number

console.log(null === undefined); // false, because they are different types


// Coercion in Non-Primitive Types During Comparison

let obj1 = { valueOf: () => 10 };
let obj2 = { valueOf: () => 10 };

// Loose equality
console.log(obj1 == obj2); // false, because objects are compared by reference, not value

// Coercion to primitive values in loose comparison
console.log(obj1 == 10); // true, because obj1 is coerced to its valueOf() result, 10

let arr1 = [1, 2];
console.log(arr1 == '1,2'); // true, array is coerced to string '1,2'
