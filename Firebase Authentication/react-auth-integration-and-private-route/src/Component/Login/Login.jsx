import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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

            <h3 className="flex gap-2 items-center">
              New to the website?{" "}
              <Link
                className="bg-blue-300 p-1 rounded-lg font-bold"
                to="/register"
              >
                Register
              </Link>
            </h3>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
