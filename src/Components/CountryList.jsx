import CountryCard from "./CountryCard.jsx";
import data from "../../data.json";
import { useEffect, useState } from "react";

function CountryList() {
  // console.log(data);
  const { loading, error, countries } = useCustomeCountries();
  return (
    <div className="country-list">
      {loading && <p>Loading ...</p>}
      {error && <p>error</p>}

      {countries.map((country) => (
        <CountryCard key={country.alpha2Code} data={country} />
      ))}
    </div>
  );
}

function useCustomeCountries() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    setError(false);
    setLoading(true);
    fakeFetch(data)
      .then((data) => {
        if (data) {
          setCountries(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error, countries };
}
function fakeFetch(data) {
  return new Promise((resolve) => {
    resolve(data);
  });
}
export default CountryList;
