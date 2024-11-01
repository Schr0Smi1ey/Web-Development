import { useEffect, useRef, useState } from "react";
const RefForm = () => {
  const [formData, setFormData] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setFormData({ name, email, password });
  };
  return (
    <div>
      <h2>Ref Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Enter Name" type="text" name="name" />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="submit" />
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

export default RefForm;
