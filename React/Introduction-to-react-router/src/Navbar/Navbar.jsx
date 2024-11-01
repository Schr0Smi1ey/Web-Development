import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
