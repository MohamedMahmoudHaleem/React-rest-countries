import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CountryList from "./Components/CountryList.jsx";
import Header from "./Components/Header.jsx";
import SearchFilterBar from "./Components/SearchFilterBar.jsx";
import CountryDetalis from "./Components/CountryDetalis.jsx";

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  console.log("🚀 ~ App ~ toggle:", toggle);
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
                    <SearchFilterBar toggle={toggle} />
                    <CountryList />
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
