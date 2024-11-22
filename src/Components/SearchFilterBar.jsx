import { useState } from "react";
import CountryFilter from "./CountryFilter.jsx";
import SearchIconDark from "/src/assets/searchIconLight.svg";
import SearchIconLight from "/src/assets/searchIconDark.svg";
function SearchFilterBar({ toggle, handleSearchCountry, countrySearch }) {
  return (
    <div className="search-filter-bar">
      <div className="search">
        <img
          className="img-magn"
          src={toggle ? SearchIconLight : SearchIconDark}
          alt=""
        />
        <input
          className="input-field"
          type="text"
          placeholder="Search for a country..."
          value={countrySearch}
          onChange={handleSearchCountry}
        />
      </div>
      <CountryFilter />
    </div>
  );
}

export default SearchFilterBar;
