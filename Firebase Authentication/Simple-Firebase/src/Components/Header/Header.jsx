import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <NavLink style={{ marginRight: "20px" }}>Home</NavLink>
      <NavLink to="/login" style={{ marginTop: "20px" }}>
        Login
      </NavLink>
    </div>
  );
};

export default Header;
