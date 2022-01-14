import React from "react";
import Squares from "./svg/Squares";
import BabelIcon from "./svg/BabelIcon";
import BootstrapIcon from "./svg/BootstrapIcon";
import CSS3Icon from "./svg/CSS3Icon";
import HTMLIcon from "./svg/HTMLIcon";
import JSIcon from "./svg/JSIcons";
import NodeJSIcon from "./svg/NodeJSIcon";
import MongoDBIcon from "./svg/MongoDBIcon";
import SassIcon from "./svg/SassIcon";
import WebpackIcon from "./svg/WebpackIcon";
import ReactIcon from "./svg/ReactIcon";
import ReduxIcon from "./svg/ReduxIcon";
import GithubIcon from "./svg/GithubIcon";
import "../styles/technologies.css";

class Technologies extends React.Component {
  render() {
    return (
      <div className="technologies_container">
        <div className="squares_container mirror squares_top">
          <Squares />
        </div>
        <div className="container_text_section">
          <h2 className="section_title">Technologies</h2>
          <p className="section_text">
            I have started my programming journey creating basic HTML and CSS
            files. Next step was obvious - JavaScript. And this is where the
            magic happens. Language with almost limitless possibilities and
            countless frameworks and librarries.
          </p>
          <p className="section_text">
            Day by day i try to broaden my experience and improve fluency in
            programming. This is not an easy journey but surely it is satisfying
            and rewarding.
            <span className="section_span">
              Below you can see technologies I am using in my projects.
            </span>
          </p>
        </div>
        <div className="technologies_icons_container">
          <HTMLIcon />
          <CSS3Icon />
          <JSIcon />
          <BabelIcon />
          <NodeJSIcon />
          <MongoDBIcon />
          <SassIcon />
          <BootstrapIcon />
          <WebpackIcon />
          <ReactIcon />
          <ReduxIcon />
          <GithubIcon />
        </div>
        <div className="squares_container squares_bottom">
          <Squares />
        </div>
      </div>
    );
  }
}

export default Technologies;
