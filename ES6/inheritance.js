// Inheritance: In JavaScript, inheritance allows one class (child class) to inherit the properties and methods from another class (parent class). 
// The child class can use or override the parent class's methods and properties, allowing for code reuse and a logical hierarchy between related classes.

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    drive() {
        console.log(`${this.name} is driving.`);
    }
}

// Bus class inherits from Vehicle class
class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);  // Calls the constructor of the Vehicle (parent) class
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

    carryPassengers() {
        console.log(`${this.name} is carrying passengers.`);
    }
}

// Truck class inherits from Vehicle class
class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);  // Calls the constructor of the Vehicle (parent) class
        this.load = load;
    }

    transportGoods() {
        console.log(`${this.name} is transporting goods.`);
    }
}
