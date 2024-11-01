import { useState } from "react";

const StatefulForm = () => {
  const [formData, setFormData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email, password });
  };
  const handleNameSet = (e) => {
    setName(e.target.value);
  };
  const handleEmailSet = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordSet = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <h2>Stateful Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameSet}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <input
          onChange={handleEmailSet}
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Password"
        />
        <input onChange={handlePasswordSet} type="submit" value="Submit" />
      </form>
      {formData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
    </div>
  );
};

export default StatefulForm;
