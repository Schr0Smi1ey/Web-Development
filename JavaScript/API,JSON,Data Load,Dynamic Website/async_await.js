const url = "https://jsonplaceholder.typicode.com/users";

// Using async/await to fetch data in more simplified way
const loadData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};


// Call the function to load data
loadData();