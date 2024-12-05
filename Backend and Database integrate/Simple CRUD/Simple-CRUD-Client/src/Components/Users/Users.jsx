import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  useEffect(() => {
    setUsers(data);
  }, [data]);
  const handleDelete = (id) => {
    console.log("id is", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = users.filter((user) => user._id !== id);
        setUsers(newUsers);
      });
  };
  return (
    <div>
      <h1>This is users page</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <h3>
              {user.email} | {user.password} | |{" "}
              <Link to={`/update/${user._id}`}>Update</Link>
              <button onClick={() => handleDelete(user._id)}>X</button>
            </h3>
          </div>
        ))}
      </div>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default Users;
