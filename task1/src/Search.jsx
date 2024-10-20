import React, { useState } from "react";

const SearchableList = () => {
  // Sample list of items
  const items = [
    "iphone",
    "samsung",
    "vivo node ce4",
    "oppo",
    "Realme",
    "Redme",
  ];

  // State for search input and filtered items
  const [searchInput, setSearchInput] = useState("");
  
  // Filtered list based on user input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle input change
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <h2>Search Books</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />

      {/* Render filtered list */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchableList;