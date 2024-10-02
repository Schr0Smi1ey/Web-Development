// setInterval is a method that calls a function or evaluates an expression at specified intervals (in milliseconds).

let num = 0;
const clockId = setInterval(() => {
  // it returns a unique id for the interval
  num++;
  // clearInterval is a method that stops the intervals set by setInterval.
  if (num > 7) {
    clearInterval(clockId); // stops the interval
  } else {
    console.log(num);
  }
}, 2000); // it will be executed after every 2 seconds
