import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.init";
import { useState } from "react";
const Signup = () => {
  const [message, setMessage] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    setMessage("");
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setMessage(
        "Password should contain at least one uppercase letter, one lowercase letter, one number, one special character and should be at least 6 characters long"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setMessage("User created successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              <input type="submit" value="Sign Up" />
            </button>
          </div>
        </form>
        {message && <div className="text-red-500 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default Signup;
