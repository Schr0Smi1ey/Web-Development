const arr = [123, 32, 43, 454, 53, 64, 32];

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const sort_asc =  [...arr].sort(function (a, b) { return a - b; }); // When sorting numbers, we need to provide a compare function to avoid incorrect sorting due to the default lexicographical order.
// [...arr] ---> This is used to create a shallow copy of the array. This is done to avoid changing the original array.
// a - b ---> This is used to sort the array in ascending order.

console.log(sort_asc); // [ 32, 32, 43, 53, 64, 123, 454 ]
console.log(arr); // [ 123, 32, 43, 454, 53, 64, 32 ]


// b - a ---> This is used to sort the array in descending order.

const sort_desc = [...arr].sort(function (a, b) { return b - a; });
console.log(sort_desc); // [ 454, 123, 64, 53, 43, 32, 32 ]
console.log(arr); // [ 123, 32, 43, 454, 53, 64, 32 ]

// Strings can be sorted using the default .sort() method without providing a compare function.

const fruits = ['banana', 'apple', 'mango', 'orange'];

// Ascending order
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']

// Descending order
fruits.sort().reverse();
console.log(fruits); // Output: ['orange', 'mango', 'banana', 'apple']
// Note: The .reverse() method is used to reverse the sorted array to get it in descending order.