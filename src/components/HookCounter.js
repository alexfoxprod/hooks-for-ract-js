import React from "react";
import { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default HookCounter;
