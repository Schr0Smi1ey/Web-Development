// The fetch function is a built-in JavaScript method used to make network requests, such as retrieving data from APIs or submitting data to a server.

// Define the URL of the JSONPlaceholder API for fetching a specific todo item
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Make a request to the API using fetch
fetch(url)
  // Handle the response by converting it to JSON format
  .then((response) => response.json())
  // Log the data to the console once the JSON is received
  .then((data) => console.log(data));
// Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }



// Another example of using the fetch function

const url2 = "https://jsonplaceholder.typicode.com/users";

fetch(url2)
    .then(response => response.json())
    .then(data => printObj(data));
// Output: an array of user objects with their information

// printing each object from the data array

function printObj(data) {
    for (const obj of data) {
        console.log(obj);
        printName(obj);
    }
}

function printName(data) {
    console.log("Name : ",data.name);
}