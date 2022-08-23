import React, { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    setCount(count + 1);
  };

  const resetValue = () => {
    setCount(0);
  };
  const decreaseValue = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={increaseValue}>Increment</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={decreaseValue}>Decrement</button>
    </div>
  );
};

export default StateExample;
