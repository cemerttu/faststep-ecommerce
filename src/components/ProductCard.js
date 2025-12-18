import React from "react";

const ProductCard = ({ product, onAdd }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
    <img src={product.image} alt={product.name} style={{ width: "100%" }} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <p>Sizes: {product.sizes.join(", ")}</p>
    <button onClick={() => onAdd(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
