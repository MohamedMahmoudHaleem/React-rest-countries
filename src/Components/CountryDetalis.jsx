import leftArrowLight from "../assets/leftArrowLight.svg";
import leftArrowDark from "../assets/leftArrowDark.svg";
import data from "../../data.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CountryDetalis({ toggle }) {
  const { name } = useParams();
  console.log("🚀 ~ CountryDetalis ~ name:", name);
  const country = data.find((country) => country?.name === name);
  console.log("x", country);
  return (
    <div className="country-main-detalis">
      <div className="back">
        <div className="img-back">
          <img src={toggle ? leftArrowDark : leftArrowLight} alt="" />
        </div>
        <Link to={"/"}>
          <div className="btn-back">
            <button>Back</button>
          </div>
        </Link>
      </div>
      <div className="country-detalis">
        <div className="img-country-back">
          <img src={country?.flags.svg} alt={country?.flags.name} />
        </div>
        <div className="country-detalis-info">
          <div className="country-detalis-header">
            <h2>{country.name}</h2>
          </div>
          <div className="country-detalis-info-data">
            <div className="info-data-1">
              <p className="country-text">
                Native Name : <span>{country?.nativeName}</span>
              </p>
              <p className="country-text">
                Population : <span>{country?.population}</span>
              </p>
              <p className="country-text">
                region : <span>{country?.region}</span>
              </p>
              <p className="country-text">
                Sub region : <span>{country?.subregion}</span>
              </p>
              <p className="country-text">
                Capital : <span>{country?.capital}</span>
              </p>
            </div>
            <div className="info-data-2">
              <p className="country-text">
                Top Level Domain : <span>{country?.topLevelDomain}</span>
              </p>
              <p className="country-text">
                Currencies : <span>{country?.currencies.at(0).name}</span>
              </p>
              <p className="country-text">
                Languages :{" "}
                {country?.languages.map((lang) => (
                  <span className="span-languages" key={lang.name}>
                    {lang.name}&nbsp;
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="border-country">
            <p className="country-text">Border Countries:</p>
            <div className="border-group">
              {country?.borders.map((border, i) => (
                <button className='border-btn'  key={i}>{border}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetalis;
