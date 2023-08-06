import React from "react";
import { useState } from "react";

export const StateUse = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>UseState Hook</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hello my Name is {name}</p>
    </div>
  );
};
