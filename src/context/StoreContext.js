import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: "Runner Pro", price: 49.99, sizes: [38, 39, 40, 41, 42], image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sporty Max", price: 59.99, sizes: [39, 40, 41, 42, 43], image: "https://via.placeholder.com/150" },
  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <StoreContext.Provider value={{ products, cart, addToCart, search, setSearch }}>
      {children}
    </StoreContext.Provider>
  );
};
