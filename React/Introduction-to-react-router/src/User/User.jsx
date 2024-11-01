import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import PropType from "prop-types";

const User = ({ user }) => {
  const { id, name, phone, email } = user;

  const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="userStyle">
      <h1>{name}</h1>
      <h3>{phone}</h3>
      <h3>{email}</h3>
      <Link to={`/user/${id}`}>Show Details</Link>
      <button onClick={handleShowDetails}>Show Details with button</button>
    </div>
  );
};

User.propTypes = {
  user: PropType.object,
};
export default User;
