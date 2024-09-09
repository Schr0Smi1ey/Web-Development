//  Way - 01
let a = 5;
let b = 10;

console.log('Before swap: a =', a, ', b =', b);

// Swap using a temporary variable
let temp = a;
a = b;
b = temp;

console.log('After swap: a =', a, ', b =', b); 

// Way - 02

console.log('Before swap: a =', a, ', b =', b);

// Swap using destructuring
[a, b] = [b, a];

console.log('After swap: a =', a, ', b =', b);

// Way - 03

console.log('Before swap: a =', a, ', b =', b); 

// Swap using arithmetic operations
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log('After swap: a =', a, ', b =', b);
