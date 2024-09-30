let a = { name: 'John', job: 'Developer' };
let b = a;

b.name = 'Doe'; // changing the value of b will also change the value of a as both are pointing to the same memory location

console.log(a); // { name: 'Doe', job: 'Developer' }
console.log.b; // { name: 'Doe', job: 'Developer' }

// Another Example

let aa = { name: 'John', job: 'Developer' };
let bb = aa;
bb = { name: 'Doe', job: 'Designer' }; // changing the value of bb will not change the value of aa as bb is now pointing to a new memory location

console.log(aa); // { name: 'John', job: 'Developer' }
console.log(bb); // { name: 'Doe', job: 'Designer' }