import CountryCard from "./CountryCard.jsx";
import data from "../../data.json";
import { useEffect, useState } from "react";
// const data = [
//   {
//     name: "Afghanistan",
//     topLevelDomain: [".af"],
//     alpha2Code: "AF",
//     alpha3Code: "AFG",
//     callingCodes: ["93"],
//     capital: "Kabul",
//     altSpellings: ["AF", "Afġānistān"],
//     subregion: "Southern Asia",
//     region: "Asia",
//     population: 40218234,
//     latlng: [33, 65],
//     demonym: "Afghan",
//     area: 652230,
//     timezones: ["UTC+04:30"],
//     borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
//     nativeName: "افغانستان",
//     numericCode: "004",
//     flags: {
//       svg: "https://flagcdn.com/af.svg",
//       png: "https://flagcdn.com/w320/af.png",
//     },
//     currencies: [
//       {
//         code: "AFN",
//         name: "Afghan afghani",
//         symbol: "؋",
//       },
//     ],
//     languages: [
//       {
//         iso639_1: "ps",
//         iso639_2: "pus",
//         name: "Pashto",
//         nativeName: "پښتو",
//       },
//       {
//         iso639_1: "uz",
//         iso639_2: "uzb",
//         name: "Uzbek",
//         nativeName: "Oʻzbek",
//       },
//       {
//         iso639_1: "tk",
//         iso639_2: "tuk",
//         name: "Turkmen",
//         nativeName: "Türkmen",
//       },
//     ],
//     translations: {
//       br: "Afghanistan",
//       pt: "Afeganistão",
//       nl: "Afghanistan",
//       hr: "Afganistan",
//       fa: "افغانستان",
//       de: "Afghanistan",
//       es: "Afganistán",
//       fr: "Afghanistan",
//       ja: "アフガニスタン",
//       it: "Afghanistan",
//       hu: "Afganisztán",
//     },
//     flag: "https://flagcdn.com/af.svg",
//     regionalBlocs: [
//       {
//         acronym: "SAARC",
//         name: "South Asian Association for Regional Cooperation",
//       },
//     ],
//     cioc: "AFG",
//     independent: true,
//   },
// ];

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
