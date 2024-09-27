// A class is a blueprint or template that defines the properties and behaviors (methods) that the objects created from it will have. 
// An object is an instance of a class. It is created from a class and has its own specific data, but shares the same structure and behavior defined by the class.

// Define a class named Teacher
class Teacher {
    // Constructor to initialize name and subject properties
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // Method to print a lecture message
    lecture() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

// Create two instances of the Teacher class
const teacher1 = new Teacher('Mr. Smith', 'Mathematics');
const teacher2 = new Teacher('Ms. Johnson', 'Physics');

// Call the lecture function for both instances
teacher1.lecture();  // Output: Mr. Smith is teaching Mathematics.
teacher2.lecture();  // Output: Ms. Johnson is teaching Physics.
