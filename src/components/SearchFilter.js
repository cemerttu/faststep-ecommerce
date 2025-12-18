import React, { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>🔍 Search & Filter</h2>
      <input
        type="text"
        placeholder="Search by product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Searching for: {search}</p>
    </div>
  );
};

export default SearchFilter;
