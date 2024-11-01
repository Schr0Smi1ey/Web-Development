import useInputState from "../Hooks/useInputState";
import { useState } from "react";

const CustomHookForm = () => {
  const [formData, setFormData] = useState(null);
  // Way 01 to use custom hook

  //   const [name, handleNameChange] = useInputState("");
  //   const [email, handleEmailChange] = useInputState("");
  //   const [password, handlePasswordChange] = useInputState("");

  // Way 02 to use custom hook
  const nameVar = useInputState("");
  const emailVar = useInputState("");
  const passwordVar = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //   Way 01
    // setFormData({ name, email, password });

    //   Way 02
    setFormData({name: nameVar.value, email: emailVar.value, password: passwordVar.value});
  };
  return (
    <div>
      <h2>Custom Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          //   Way 01
          //   value={name}
          //   onChange={handleNameChange}

          //   Way 02
          {...nameVar}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <input
          //   Way 01
          //   value={email}
          //   onChange={handleEmailChange}

          //   Way 02
          {...emailVar}
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          //   Way 01
          //   value={password}
          //   onChange={handlePasswordChange}

          //   Way 02
          {...passwordVar}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Submit" />
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

export default CustomHookForm;
