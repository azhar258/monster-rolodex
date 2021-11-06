import React from "react";
import "./SerachBox.style.css";

const SearchBox = ({ handleChange, placeholeder }) => {
  // const { handleChange, placeholeder } = props;
  return (
    <input
      className="input-search"
      type="search"
      onChange={handleChange}
      placeholeder={placeholeder}
    />
  );
};

export default SearchBox;
