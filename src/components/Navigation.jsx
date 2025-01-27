import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  HiTranslate,
  HiHome,
  HiArchive,
  HiLogout,
  HiSun,
  HiMoon,
} from "react-icons/hi";
import LocaleContext from "../contexts/localeContext";
import ThemeContext from "../contexts/ThemeContext";

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button className="toggle-locale" onClick={toggleLocale}>
            <HiTranslate />
          </button>
        </li>
        <li>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "dark" ? <HiMoon /> : <HiSun />}
          </button>
        </li>
        {name && (
          <>
            <li>
              <button className="home-button">
                <Link to="/">
                  <HiHome />
                </Link>
              </button>
            </li>
            <li>
              <button className="archives-button">
                <Link to="/archives">
                  <HiArchive />
                </Link>
              </button>
            </li>
            <li>
              <button className="button-logout" onClick={logout}>
                <HiLogout /> {name}
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Navigation;
