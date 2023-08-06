import React from "react";
import { useState, useCallback } from "react";
import Products from "./Products";

export const CallbackHook = () => {
  const [product, setProduct] = useState(["product1", "product2"]);
  const [count, setcount] = useState(0);
  const [cart, setCart] = useState(0);

  const addtoCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  return (
    <div>
      <h2>UseCallback Hook</h2>
      <h4>Count:{count}</h4>
      <button onClick={() => setcount(count + 1)}>Count</button>
      <h3>Cart :{cart}</h3>
      <div>
        {product.map((p, i) => {
          return <Products name={p} key={i} addtoCart={addtoCart} />;
        })}
      </div>
    </div>
  );
};
