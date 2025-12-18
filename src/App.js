import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import SearchFilter from "./components/SearchFilter";
import AddToCart from "./components/AddToCart";
import Payment from "./components/Payment";
import DeliveryTracking from "./components/DeliveryTracking";
import UserAccount from "./components/UserAccount";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>FastStep E-commerce</h1>
      <ProductCatalog />
      <SearchFilter />
      <AddToCart />
      <Payment />
      <DeliveryTracking />
      <UserAccount />
    </div>
  );
}

export default App;
