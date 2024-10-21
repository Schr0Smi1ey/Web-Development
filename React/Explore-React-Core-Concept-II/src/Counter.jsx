import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); {/* useState is a hook that allows you to have state variables in functional components. You pass the initial value in the function */}

  const Add = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h1>Counter: {count}</h1>
      </div>
      <div>
        <button onClick={Add}>Add</button>
        <button onClick={Minus}>Minus</button>
      </div>
    </div>
  );
}

export default Counter;
