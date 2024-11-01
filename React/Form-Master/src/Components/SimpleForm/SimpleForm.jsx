import { useState } from "react";

const SimpleForm = () => {
  const [formData, setformData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setformData({ name, email });
  };
  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="email" name="email" id="" placeholder="Enter Email" />
        <input type="submit" value="Submit" />
      </form>
      {formData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
