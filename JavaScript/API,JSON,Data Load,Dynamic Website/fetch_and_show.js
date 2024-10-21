console.log("fetch_and_show.js");
const url = "https://jsonplaceholder.typicode.com/users";

function load_data() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => makeList(data));
}

function makeList(data) {
  const list = document.getElementById("users-list");

  for (const obj of data) {
    const user = document.createElement("li");
    user.innerText = obj.name;
    list.appendChild(user);
  }
}
