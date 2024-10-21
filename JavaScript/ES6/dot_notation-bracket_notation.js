// Define an object with properties
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2021,
    'fuel type': 'Petrol',  // Property with space (requires bracket notation)
};

// Accessing properties using dot notation
console.log(car.brand);  // Output: Toyota
console.log(car.model);  // Output: Corolla
console.log(car.year);   // Output: 2021

// Accessing properties using bracket notation
console.log(car['brand']);     // Output: Toyota
console.log(car['model']);     // Output: Corolla
console.log(car['fuel type']); // Output: Petrol (Must use bracket notation due to space)

// Changing values using dot notation
car.year = 2022;
console.log(car.year);  // Output: 2022

// Changing values using bracket notation
car['fuel type'] = 'Electric';
console.log(car['fuel type']); // Output: Electric
