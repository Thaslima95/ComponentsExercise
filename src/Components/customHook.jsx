import { useState } from "react";
const useCounter = (initialvalue) => {
  const [count, setCount] = useState(initialvalue);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialvalue);
  };

  return { count, increment, decrement, reset };
};
export default function CustomHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Custom Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
