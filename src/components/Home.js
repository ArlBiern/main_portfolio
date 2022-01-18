import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="section">
        <Header />
      </div>
      <div className="section">
        <AboutMe />
      </div>
      <div className="section">
        <Technologies />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
