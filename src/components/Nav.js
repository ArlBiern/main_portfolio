import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav.css";
import Logo from "./svg/Logo";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerChecked: false,
    };

    this.hamburgerInput = React.createRef();
    this.logo = React.createRef();
  }

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        if (e.target.closest("a") !== this.logo.current) {
          e.preventDefault();
          if (this.state.hamburgerChecked) {
            this.hamburgerInput.current.click();
          }

          document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });
  }

  handleHamburgerInputClick(e) {
    this.setState({ hamburgerChecked: !this.state.hamburgerChecked });
  }

  render() {
    return (
      <div className="section">
        <div className="nav_container">
          <div className="nav_logo_container">
            <Link to="/" ref={this.logo}>
              <Logo />
            </Link>
          </div>
          <nav>
            <input
              id="burger"
              type="checkbox"
              className="hamburger_input"
              onClick={this.handleHamburgerInputClick.bind(this)}
              ref={this.hamburgerInput}
            />
            <label htmlFor="burger" className="hamburger_label">
              <span className="hamburger_span"></span>
              <span className="hamburger_span"></span>
              <span className="hamburger_span"></span>
              <span className="hamburger_span"></span>
            </label>
            <ul className="navigation_list">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#aboutMe">About me</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <li className="language">
                <button className="language_button">
                  <span className="language_span language_active">PL </span>/
                  <span className="language_span language_inactive"> EN</span>
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
