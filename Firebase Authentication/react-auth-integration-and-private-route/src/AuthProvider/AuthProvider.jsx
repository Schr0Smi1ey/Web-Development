import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase.init";
import { useState } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log("User is logged in", user);
      } else {
        setUser(null);
        console.log("User is logged out");
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

/**
 * Create Context with Null
 * create Provider with children
 * set a value with something
 * use the authProvider in the main.jsx
 * access the children in the authProvider of main.jsx
 * export authcontext
 * export authprovider
 */
