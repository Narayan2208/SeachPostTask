import React, { useState, useEffect } from "react";

const SearchBox = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      onSearch(value);
    }, 300);

    setDebounceTimeout(newTimeout);
  };

  return (
    <input
      type="text"
      value={inputValue}
      placeholder="Search by title..."
      onChange={handleChange}
      style={{width:"30%", padding:"0.5em", fontSize:"20px", borderRadius:"10px"}}
    />
  );
};

export default SearchBox;
