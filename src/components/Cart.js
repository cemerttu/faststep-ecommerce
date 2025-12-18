import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div>
      <h2>❤️ Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : <ul>{cart.map((item, i) => <li key={i}>{item.name} - ${item.price}</li>)}</ul>}
    </div>
  );
};

export default Cart;
