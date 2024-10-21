/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

function users() {
  const [users, setUsers] = useState([]); // useState is a hook that allows you to have state variables in functional components. You pass the initial value in the function. Here we are setting an empty array as the initial value of users

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // useEffect is a hook that allows you to perform side effects in functional components. Here we are fetching data from an API and setting the data to the users state variable using setUsers function when the component is mounted for the first time. The empty array as the second argument makes sure that the effect runs only once when the component is mounted for the first time. If you want to run the effect every time the component is rendered, you can remove the empty array. If you want to run the effect only when a specific state variable changes, you can pass that state variable in the array. If you want to run the effect when the component is mounted and when a specific state variable changes, you can pass both in the array.

  return (
    <div>
      <h3>Users: {users.length}</h3>
      <div>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
}

export default users;

{
  /* 
    1. useState to hold data
    2. useEffect with Dependency Array
    3. use fetch to load data
    4. set loaded data to the state
    5. display data on the component
 */
}
