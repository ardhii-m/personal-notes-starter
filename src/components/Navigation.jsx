import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiTranslate, HiHome, HiArchive, HiLogout, HiSun } from "react-icons/hi";
import LocaleContext from "../contexts/localeContext";
import ThemeContext from "../contexts/ThemeContext";

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  // const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button className='toggle-locale' onClick={toggleLocale}><HiTranslate /></button>
        </li>
        <li><button className="toggle-theme"><HiSun/></button></li>
        <li>
          <Link to="/">
            <HiHome />
          </Link>
        </li>
        <li>
          <Link to="/archives">
            <HiArchive />
          </Link>
        </li>
        <li>
          <button className="button-logout" onClick={logout}>
            <HiLogout />{name}
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Navigation;
