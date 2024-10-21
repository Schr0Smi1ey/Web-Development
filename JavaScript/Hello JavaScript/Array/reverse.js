const arr = [1, 2, 3, 4, 5, 6, 7];

// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
arr.reverse();
console.log(arr);


const arr1 = [1, 2, 3, 4, 5, 6, 7];

let reversedArr = [];
for (const x of arr1) {
    reversedArr.unshift(x);
}
console.log(reversedArr);


