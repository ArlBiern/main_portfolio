import { Link } from "react-router-dom";

import "../styles/nav.css";
import Logo from "./svg/Logo";

const Nav = () => {
  return (
    <div className="section">
      <div className="nav_container">
        <div className="nav_logo_container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav>
          <input id="burger" type="checkbox" className="hamburger_input" />
          <label htmlFor="burger" className="hamburger_label">
            <span className="hamburger_span"></span>
            <span className="hamburger_span"></span>
            <span className="hamburger_span"></span>
            <span className="hamburger_span"></span>
          </label>
          <ul className="navigation_list">
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="language">
              <button className="language_button">
                <span className="language_span language_active">PL </span>/
                <span className="language_span language_inactive"> EN</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
