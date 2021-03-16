import React from "react";
import { SearchBar } from "./SearchElement";

const Search = () => {
  /* const context = useContext(); */
  const handleChange = () => {};
  return (
    <SearchBar className="d-flex px-2" id="form-search">
      <label htmlFor="search">
        <i className="fas fa-search"></i>
      </label>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        id="search"
        onChange={(e) => handleChange(e)}
      />
      <button
        className="btn btn-outline-success"
        type="button"
        id="btn-search"
        onChange={handleChange}
      >
        Buscar
      </button>
    </SearchBar>
  );
};

export default Search;
