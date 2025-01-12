import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Country..."
        />
      </div>
    </>
  );
}
