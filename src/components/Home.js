import Header from "./Header";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div>
      <div className="section">
        <Header />
      </div>
      <div className="section">
        <AboutMe />
      </div>
      <div
        className="section"
        style={{
          height: "100vh",
          backgroundColor: "#121212",
          paddingTop: "100px",
        }}
      >
        Next section
      </div>
    </div>
  );
};

export default Home;
