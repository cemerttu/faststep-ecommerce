import React, { useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => setCart([...cart, item]);

  return (
    <div>
      <h2>❤️ Add to Cart / Wishlist</h2>
      <button onClick={() => addItem("Runner Pro")}>Add Runner Pro to Cart</button>
      <p>Cart: {cart.join(", ")}</p>
    </div>
  );
};

export default AddToCart;
