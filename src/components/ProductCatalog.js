import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const { products, addToCart, search } = useContext(StoreContext);

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>🛒 Product Catalog</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
