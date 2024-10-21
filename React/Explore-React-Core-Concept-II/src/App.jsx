import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  const handleClick1 = () => {
    alert("Button 1 Clicked");
  };
  const handleClick3 = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concept II</h1>

      <div className="EventHandling">
        <h2>Event Handling in React</h2>
        <div>
          <button onClick={handleClick1}>Click 1</button>
          <button
            onClick={() => {
              alert("Button 2 Clicked");
            }}
          >
            Click 2
          </button>
          <button onClick={() => handleClick3(5)}>Click 3</button>{" "}
          {/* here the function isn't written directly but written through a arrow function, cause if it's written directly it will execute automatically as it's a JS code not HTML */}
        </div>
      </div>
      <hr />
      <div className="UseState">
        <h2>UseState in React</h2>
        <div>
          <Counter></Counter>
        </div>
      </div>
      <hr />
      <div className="UseEffect">
        <h2>UseEffect in React</h2>
        <div>
          <Users></Users>
        </div>
      </div>
    </>
  );
}

export default App;
