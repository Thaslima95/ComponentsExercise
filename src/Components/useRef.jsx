import React from "react";
import { useEffect, useRef } from "react";

export const RefuseHook = () => {
  const refinput = useRef(null);
  useEffect(() => {
    refinput.current.focus();
  }, []);
  return (
    <div>
      <input ref={refinput} type="text" />
    </div>
  );
};
