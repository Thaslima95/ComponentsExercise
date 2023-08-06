import React, { useState } from "react";
import { useEffect } from "react";

export const Effecthook = () => {
  const [countDownDate, setcountdown] = useState(0);
  const [times, setTimes] = useState(0);
  useEffect(() => {
    const userbutton = () => {
      setTimes(countDownDate);
    };
    userbutton();
  }, [countDownDate + 1]);
  return (
    <>
      <h1>UseEffect Hook</h1>
      <h2>User Clicked Button {times} times</h2>
      <button onClick={() => setcountdown(countDownDate + 1)}>Click Me</button>
    </>
  );
};
