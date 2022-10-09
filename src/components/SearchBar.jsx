import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="type to search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
