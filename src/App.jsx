import CountryList from "./Components/CountryList.jsx";
import Header from "./Components/Header.jsx";
import SearchFilterBar from "./Components/SearchFilterBar.jsx";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  console.log("🚀 ~ Header ~ toggle:", toggle);

  return (
    <div className="app-container">
      <div
        className="container app-container"
        data-theme={toggle ? "dark" : ""}
      >
        <Header toggle={toggle} handleToggle={handleToggle} />

        <div className="app-body">
          <SearchFilterBar toggle={toggle} />
          <CountryList />
        </div>
      </div>
    </div>
  );
}

export default App;
