import React from "react";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Runner Pro", price: 49.99, sizes: [38, 39, 40, 41, 42], image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sporty Max", price: 59.99, sizes: [39, 40, 41, 42, 43], image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <h2>🛒 Product Catalog</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Sizes: {product.sizes.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
