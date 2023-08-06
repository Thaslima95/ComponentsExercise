import React from "react";
import { useState, useMemo } from "react";

export const MemoHook = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const showMax = () => {
    console.log("Max value change");
    return Math.max(...arr);
  };
  const val = useMemo(() => showMax(), [arr]);
  return (
    <>
      <h2>UseMemo</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        ADD Count
      </button>
      <button onClick={() => setArr([...arr, 12, 13])}>Add Values</button>
      {/* <p>{showMax()}</p> */}
      <p>{val}</p>
      <p>{count}</p>
    </>
  );
};
