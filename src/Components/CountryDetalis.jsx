import leftArrowLight from "../assets/leftArrowLight.svg";
import leftArrowDark from "../assets/leftArrowDark.svg";
import data from "../../data.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CountryDetalis({ toggle }) {
  const { alpha3Code } = useParams();
  console.log("🚀 ~ CountryDetalis ~ area:", alpha3Code);
  const country = data.find((country) => country?.alpha3Code === alpha3Code);
  console.log("🚀 ~ CountryDetalis ~ country:", country);

  // function handleprams() {
  //   console.log();
  // }
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
            <h2>{country?.name}</h2>
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
                Currencies : <span>{country?.currencies[0].name}</span>
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
              {country?.borders ? (
                country?.borders?.map((border) => (
                  <>
                    <Link to={`:${country?.alpha3Code}`}>
                      <button className="border-btn" key={border[0]}>
                        {border}
                      </button>
                    </Link>
                  </>
                ))
              ) : (
                <p
                  className="border-btn"
                  style={{
                    width: "28rem",
                    fontWeight: "bold",
                    fontSize: "1.6rem",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  There Is No Borders Countires{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetalis;
