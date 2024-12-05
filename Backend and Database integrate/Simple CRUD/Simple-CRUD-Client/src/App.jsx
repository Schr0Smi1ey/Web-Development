import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    fetch("http://localhost:5000/users", {
      // sending a POST request to the server
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfully");
        }
        form.reset();
      });
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email" id="email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <Link to={"/users"}>Users</Link>
    </>
  );
}

export default App;
