import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Audio } from "react-loader-spinner";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <h1>Introduction to React Router</h1>
      <Navbar />
      {navigation.state === "loading" ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
