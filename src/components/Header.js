import HeaderAnimation from "./svg/HeaderAnimation";
import "../styles/header.css";
import Squares from "./svg/Squares";

function Header() {
  return (
    <div className="header_container">
      <h1 className="header_heading">
        Hi! My name is Ariel. I try my best to build app and web pages.
      </h1>
      <h2 className="header_h2">Please feel free to explore my partfolio.</h2>
      <div className="header_animation_container">
        <HeaderAnimation />
      </div>
      <div className="squares_container squares_bottom">
        <Squares />
      </div>
    </div>
  );
}

export default Header;
