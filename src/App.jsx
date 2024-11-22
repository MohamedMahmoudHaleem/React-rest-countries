import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CountryList from "./Components/CountryList.jsx";
import Header from "./Components/Header.jsx";
import SearchFilterBar from "./Components/SearchFilterBar.jsx";
import CountryDetalis from "./Components/CountryDetalis.jsx";

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  function handleSearchCountry(e) {
    setCountrySearch(e.target.value);
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <Router>
      <div className="app-container">
        <div
          className="container app-container"
          data-theme={toggle ? "dark" : ""}
        >
          <Header toggle={toggle} handleToggle={handleToggle} />
          <div className="app-body">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchFilterBar
                      toggle={toggle}
                      countrySearch={countrySearch}
                      handleSearchCountry={handleSearchCountry}
                    />
                    <CountryList countrySearch={countrySearch} />
                  </>
                }
              />
              <Route
                path="country/:alpha3Code"
                element={
                  <>
                    <CountryDetalis toggle={toggle} />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
