/* eslint-disable react/prop-types */
function User({ user }) {
  const { name, email } = user;
  return (
    <div className="UserBox">
      <h2>Name : {name}</h2>
      <h3>Email : {email}</h3>
    </div>
  );
}

export default User;
