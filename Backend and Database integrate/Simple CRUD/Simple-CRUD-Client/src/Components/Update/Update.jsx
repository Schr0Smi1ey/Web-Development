import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(user);
    console.log(`http://localhost:5000/users/${user._id}`);
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("User updated successfully");
        }
        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="email" name="email" defaultValue={user?.email} />
        <br />
        <input type="password" name="password" defaultValue={user?.password} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
