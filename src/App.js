import React from "react";
import { StoreProvider } from "./context/StoreContext";
import ProductCatalog from "./components/ProductCatalog";
import SearchFilter from "./components/SearchFilter";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <StoreProvider>
      <div className="site-container">
        <Header />
        <main className="site-main" style={{ padding: "20px" }}>
          <h1>FastStep E-commerce</h1>
          <SearchFilter />
          <ProductCatalog />
          <Cart />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
