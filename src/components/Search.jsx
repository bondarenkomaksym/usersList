import React from "react";

const Search = ({ filterText, onChange }) => {
  return (
    <div className="filter">
      <input type="text"
        className="filter__input"
        value={filterText}
        onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}

export default Search;