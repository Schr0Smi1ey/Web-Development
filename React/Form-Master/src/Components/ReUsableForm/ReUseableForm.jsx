import PropType from "prop-types";
import { useState } from "react";

const ReUseableForm = ({ handleSubmit, submitBtnText, children }) => {
  const [formData, setFormData] = useState(null);
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setFormData({ name, email, password });
    handleSubmit(e);
  };
  console.log(children);
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" value={submitBtnText} />
      </form>
      {formData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
      ;
    </div>
  );
};

ReUseableForm.propTypes = {
  handleSubmit: PropType.func,
  submitBtnText: PropType.string,
  children: PropType.node,
};
export default ReUseableForm;
