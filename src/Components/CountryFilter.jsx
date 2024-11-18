export default function CountryFilter() {
  return (
    <div className="select">
      <label className="select-label" id="select-region">
        <select className="select-data" id="select-region">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </label>
    </div>
  );
}
