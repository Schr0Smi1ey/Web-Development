// 1. Creating an array
const fruits = ["apple", "banana", "orange", "grape", "mango"];

// 2. Accessing array elements using square brackets
console.log("First fruit:", fruits[0]); // Output: apple
console.log("Second fruit:", fruits[1]); // Output: banana

// 3. Modifying elements directly in the array
fruits[2] = "kiwi"; // Replacing "orange" with "kiwi"
console.log("Modified fruits array:", fruits); // Output: ["apple", "banana", "kiwi", "grape", "mango"]

// 4. Adding new elements to an array
fruits[5] = "pineapple"; // Adds "pineapple" at index 5
console.log("Array after adding pineapple:", fruits); // Output: ["apple", "banana", "kiwi", "grape", "mango", "pineapple"]

// 5. Adding an element beyond the current length creates empty slots
fruits[7] = "papaya";
console.log("Array with empty slots:", fruits); // Output: ["apple", "banana", "kiwi", "grape", "mango", "pineapple", empty, "papaya"]

// 6. Iterating over the array using a for loop
console.log("Iterating over fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

// 7. Finding the index of an element in the array
const grapeIndex = fruits.indexOf("grape");
console.log("Index of 'grape':", grapeIndex); // Output: 3

// 8. Removing an element from the array using its index
const removedFruit = fruits.splice(grapeIndex, 1); // Removes "grape"
console.log("Removed fruit:", removedFruit); // Output: ["grape"]
console.log("Array after removing 'grape':", fruits); // Output: ["apple", "banana", "kiwi", "mango", "pineapple", empty, "papaya"]

// 9. Checking the length of the array
console.log("Length of fruits array:", fruits.length); // Output: 8

// 10. Removing an element and filling empty slots with undefined
delete fruits[6];
console.log("Array after deleting index 6:", fruits); // Output: ["apple", "banana", "kiwi", "mango", "pineapple", empty, undefined, "papaya"]

// 11. Resetting the array length (removes extra elements)
fruits.length = 5;
console.log("Array after resetting length:", fruits); // Output: ["apple", "banana", "kiwi", "mango", "pineapple"]
