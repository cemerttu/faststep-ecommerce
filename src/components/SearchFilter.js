import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const SearchFilter = () => {
  const { search, setSearch } = useContext(StoreContext);

  return (
    <div>
      <h2>🔍 Search & Filter</h2>
      <input
        type="text"
        placeholder="Search by product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
