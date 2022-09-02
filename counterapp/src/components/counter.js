import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function decramentCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incramentCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={decramentCount}>-</button>
      <span>{count}</span>
      <button onClick={incramentCount}>+</button>
    </>
  );
}
