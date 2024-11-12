import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("testing");
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button style={{ marginTop: "20px" }} onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <button style={{ marginTop: "20px" }} onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      )}
      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
