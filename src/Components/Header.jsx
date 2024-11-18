import DarkModeIcon from "/src/assets/darkmode.svg";
import LightModeIcon from "/src/assets/lightmode.svg";

function Header({ toggle, handleToggle }) {
  return (
    <div className="header">
      <p className="header-title">Where in the world?</p>
      <div className="dark-input">
        <div className="dark-icon">
          <label className="dark-text" htmlFor="darkmode">
            <img
              className="img"
              src={toggle ? DarkModeIcon : LightModeIcon}
              alt="darkIcon"
            />
            <input
              className="checker"
              type="checkbox"
              onClick={handleToggle}
              id="darkmode"
              name="darkmode"
            />
            Dark Mode
          </label>
        </div>
        {/* <p className="dark-text">Dark Mode</p> */}
      </div>
    </div>
  );
}

export default Header;
