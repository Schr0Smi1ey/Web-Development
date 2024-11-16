import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
}

export default App;
