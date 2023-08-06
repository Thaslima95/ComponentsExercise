import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      break;
  }
}
export const ReducerHook = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <>
      <h2>useReducer Hook</h2>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
