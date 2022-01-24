import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Projects from "./Projects";

class Home extends React.Component {
  componentDidMount() {
    let nav = document.querySelector("nav");
    nav.classList.remove("invisible");
  }

  render() {
    return (
      <div>
        <div className="section" id="header">
          <Header />
        </div>
        <div className="section" id="aboutMe">
          <AboutMe />
        </div>
        <div className="section" id="technologies">
          <Technologies />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
