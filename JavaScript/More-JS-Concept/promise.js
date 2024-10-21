const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();

    if (success > 0.5) {
      resolve(`success with val: ${success}`); // resolve is a builtin function that is called when a promise is resolved which takes a single argument
    } else {
      reject(`Rejected with val: ${success}`); // reject is a builtin function that is called when a promise is rejected which takes a single argument
    }
  });
};

// Using then() and catch()
myLoader()
  .then((message) => {
    console.log(message); // Logs the success message
  })
  .catch((error) => {
    console.error(error); // Logs the error message if promise is rejected
  });

// Using async/await
const handlePromise = async () => {
  try {
    const message = await myLoader(); // Awaits the resolution of the promise
    console.log(message); // Logs the success message if resolved
  } catch (error) {
    console.error(error); // Logs the error message if rejected
  }
};

handlePromise();
