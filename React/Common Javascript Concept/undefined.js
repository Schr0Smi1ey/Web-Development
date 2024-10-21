/*
* 8 ways to get undifined
*/

// 1. Declare a variable but do not assign a value to it
let a;
console.log(a); // undefined


// 2. function declaration without return statement
function foo() {
    let a = 1;
    // return statement is missing
}

console.log(foo()); // undefined


// 3. function with missing parameter

function bar(a , b, c, d) {
    console.log(a, b, c, d);
}

bar(1); // 1 undefined undefined undefined

// 4. return statement without value

function baz(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}

console.log(baz(-1, 2)); // undefined

// 5. Accessing an object property that does not exist

let obj = { name: 'John', job: 'Developer' };
console.log(obj.age); // undefined

// 6. Accessing an array element that does not exist

let arr = [1, 2, 3, 4, 5];
console.log(arr[1], arr[5], arr[200]); // 2 undefined undefined


// 7. deleting an element from an array

let arr1 = [1, 2, 3, 4, 5];
delete arr1[1];
console.log(arr1); // [ 1, <1 empty item>, 3, 4, 5 ]

// 8. set a variable to undefined

let x = 10;
x = undefined;
console.log(x); // undefined

// we should assign null to a variable if we want to explicitly say that the variable has no value
let y = null;
console.log(y); // null
console.log(typeof y); // object
console.log(typeof null); // object
console.log(null == undefined); // true
console.log(null === undefined); // false