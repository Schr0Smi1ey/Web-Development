import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
