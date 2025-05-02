import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    props.setSearchTitle(inputRef.current.value);
  };

  return (
    <div className="search-bar">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
          }
        }}
        ref={inputRef}
        type="text"
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
