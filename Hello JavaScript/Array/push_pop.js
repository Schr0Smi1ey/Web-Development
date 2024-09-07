let arr = [1, 2, 3, 4, 5, 6, 7];

arr.push(8);
console.log(arr);
arr.push(9);
console.log(arr);

arr.pop();
console.log(arr);

arr[arr.length] = 9;
console.log(arr);

arr.length = arr.length - 1;
console.log(arr);