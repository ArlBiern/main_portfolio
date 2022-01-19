import "../styles/projects.css";
import Carousel from "./projects/Carousel";
import Squares from "./svg/Squares.js";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="squares_container mirror squares_top">
        <Squares />
      </div>
      <div className="container_text_section">
        <h2 className="section_title">Projekty</h2>
        <Carousel />
      </div>
      <div className="squares_container project_bottom mirror">
        <Squares />
      </div>
    </div>
  );
};

export default Projects;
