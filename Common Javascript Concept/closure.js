// a closure is a function that retains access to variables from its outer (lexical) scope, even after that outer function has finished executing. Closures allow functions to "remember" the environment in which they were created.


function getCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    }
}

const count = getCounter();

console.log(count()); // Output: 1
console.log(count()); // Output: 2
console.log(count()); // Output: 3

const count2 = getCounter();
console.log(count2()); // Output: 1
console.log(count2()); // Output: 2
console.log(count2()); // Output: 3
