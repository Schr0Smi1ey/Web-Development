console.log(1);
console.log(2);
// this function will be executed after 4 seconds only once
setTimeout(() => {
  console.log(3);
}, 4000); // ---> first argument is a callback function and second argument is the time in milliseconds
console.log(4);
console.log(5);
// Output: 1 2 4 5 3
