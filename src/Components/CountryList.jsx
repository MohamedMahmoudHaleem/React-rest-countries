import CountryCard from "./CountryCard.jsx";
import data from "../../data.json";
import { useEffect, useState } from "react";

function CountryList({ countrySearch, region }) {
  const { loading, error, countries } = useCustomeCountries();

  function editeSearch(search) {
    if (!search) return;
    return search
      .trim()
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
  const specifcCountry = countries.find(
    (country) => country?.name === editeSearch(countrySearch)
  );
  const specificRegion = countries.filter(
    (country) => country?.region === region
  );
 

  return (
    <div className="country-list">
      {loading && <p>Loading ...</p>}
      {error && <p>error</p>}
      {specificRegion &&
        specificRegion.map((country) => (
          <CountryCard key={country.alpha2Code} data={country} />
        ))}
      {specifcCountry ? (
        <CountryCard key={specifcCountry?.alpha2Code} data={specifcCountry} />
      ) : (
        countries.map((country) => (
          <CountryCard key={country.alpha2Code} data={country} />
        ))
      )}
      {/* {countries.map((country) => (
        <CountryCard key={country.alpha2Code} data={country} />
      ))} */}
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
