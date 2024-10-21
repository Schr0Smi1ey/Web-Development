const pen = {
    type: "ballpoint",
    color: "blue",
    price: 10
}

console.log(pen); // { type: 'ballpoint', color: 'blue', price: 10 }

const pencil = new Object();
console.log(pencil); // {}

const rubber = Object.create({});
console.log(rubber); // {}