import { useState } from "react";
import CountryFilter from "./CountryFilter.jsx";
import SearchIconDark from "/src/assets/searchIconLight.svg";
import SearchIconLight from "/src/assets/searchIconDark.svg";
function SearchFilterBar() {
  const [country, setCountry] = useState("");
  function handleCountry(e) {
    setCountry(e.target.value);
  }
  console.log(country);
  return (
    <div className="search-filter-bar">
      <div className="search">
        <img className="img-magn" src={SearchIconDark} alt="" />
        <input
          className="input-field"
          type="text"
          placeholder="Search for a country..."
          onChange={handleCountry}
        />
      </div>
      <CountryFilter />
    </div>
  );
}

export default SearchFilterBar;
