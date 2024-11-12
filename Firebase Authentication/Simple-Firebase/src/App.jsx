import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <h1>Simple Firebase</h1>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
