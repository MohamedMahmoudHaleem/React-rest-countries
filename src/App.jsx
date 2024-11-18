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
    <div data-theme={toggle ? "dark" : ""}>
      <Header toggle={toggle} handleToggle={handleToggle} />
      <SearchFilterBar />
      <CountryList />
    </div>
  );
}

export default App;
