import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
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
};

export default Home;
