const max = Math.max(43, 56, 23, 89, 88, 29);
console.log(max); // 89


// Spread Operator

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1 2 3 4 5
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // 5

// Copying array without spread operator
const newNumbers = numbers;
console.log(newNumbers); // [1, 2, 3, 4, 5]
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [1, 2, 3, 4, 5, 6] --> newNumbers is also updated cause it is a reference to numbers

// Copying an array

const nums = [1, 2, 3, 4, 5];
const copyNums = [...nums];
console.log(copyNums); // [1, 2, 3, 4, 5]
nums.push(6);
console.log(nums); // [1, 2, 3, 4, 5, 6]
console.log(copyNums); // [1, 2, 3, 4, 5] --> copyNums is not updated cause it is a copy of nums array
