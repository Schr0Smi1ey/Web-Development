function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18 years old."); // Throw an error if age is less than 18
  }
  return "Access granted. You are old enough!";
}

try {
  let userAge = 16; // Example age
  let result = checkAge(userAge); // This will throw an error because age < 18
  console.log(result);
} catch (error) {
  console.error("Error: " + error.message); // Catch the thrown error and log the error message
}
