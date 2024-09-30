// Pass by Value Example (Primitive types)
function modifyValue(x) {
  x = 10; // Modifying the value
  console.log("Inside function (after modification):", x); // 10
}

let num = 5;
console.log("Before function call:", num); // 5
modifyValue(num);
console.log("After function call:", num); // 5 (num is not affected)

// -------------------------------------------------

// Pass by Reference Example (Objects and Arrays)
function modifyObject(obj) {
  obj.name = "Changed"; // Modifying the object property
  console.log("Inside function (after modification):", obj); // {name: "Changed"}
}

let person = { name: "Original" };
console.log("Before function call:", person); // {name: "Original"}
modifyObject(person);
console.log("After function call:", person); // {name: "Changed"} (person is modified)
