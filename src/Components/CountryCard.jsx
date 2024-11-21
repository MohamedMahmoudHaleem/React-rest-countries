import { Link } from "react-router-dom";

function CountryCard({ data }) {
  return (
    // country/:alpha2Code
    <Link to={`/country/${data?.alpha2Code}`}>
      <div className="card-container">
        <div className="card-img">
          <img src={data?.flags.svg} alt="" />
        </div>
        <div className="card-data">
          <div className="country-name">
            <h2>{data?.name}</h2>
          </div>
          <div className="card-info">
            <p>Population: {data?.population}</p>
            <p>Region: {data?.region}</p>
            <p>Capital: {data?.capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
