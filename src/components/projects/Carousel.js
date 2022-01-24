import { useState, useEffect } from "react";
import slides from "./slides";
import "../../styles/carousel.css";
import { CSSTransition } from "react-transition-group";
import BabelIcon from "../svg/BabelIcon";
import BootstrapIcon from "../svg/BootstrapIcon";
import CSS3Icon from "../svg/CSS3Icon";
import HTMLIcon from "../svg/HTMLIcon";
import JSIcon from "../svg/JSIcons";
import NodeJSIcon from "../svg/NodeJSIcon";
import MongoDBIcon from "../svg/MongoDBIcon";
import SassIcon from "../svg/SassIcon";
import WebpackIcon from "../svg/WebpackIcon";
import ReactIcon from "../svg/ReactIcon";
import ReduxIcon from "../svg/ReduxIcon";
import GithubIcon from "../svg/GithubIcon";
import PugIcon from "../svg/PugIcon";

const componentsArray = {
  BabelIcon: <BabelIcon key="BabelIcon" />,
  BootstrapIcon: <BootstrapIcon key="BootstratIcon" />,
  CSS3Icon: <CSS3Icon key="CSS3Icon" />,
  JSIcon: <JSIcon key="JSIcon" />,
  HTMLIcon: <HTMLIcon key="HTMLIcon" />,
  NodeJSIcon: <NodeJSIcon key="NodeIcon" />,
  MongoDBIcon: <MongoDBIcon key="MongoDBIcon" />,
  SassIcon: <SassIcon key="SassIcon" />,
  WebpackIcon: <WebpackIcon key="WebpackIcon" />,
  ReactIcon: <ReactIcon key="ReactIcon" />,
  ReduxIcon: <ReduxIcon key="ReduxIcon" />,
  GithubIcon: <GithubIcon key="GithubIcon" />,
  PugIcon: <PugIcon key="PugIcon" />,
};

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const techArray = (arr) => {
    return arr.map((el) => componentsArray[el]);
  };

  const handleClickNext = () => {
    const newSlide = slide > slides.length - 2 ? 0 : slide + 1;
    setSlide(newSlide);
  };
  const handleClickPrev = () => {
    const newSlide = slide < 1 ? slides.length - 1 : slide - 1;
    setSlide(newSlide);
  };

  /* useEffect(() => {
    const interval = setInterval(handleClickNext, 4000);
    return () => clearInterval(interval);
  }); */

  return (
    <div className="carousel">
      <div className="carousel_texts">
        <CSSTransition
          key={slide}
          in={true}
          appear={true}
          timeout={500}
          classNames="slideL"
        >
          <div>
            <h2 className="carousel_title">{slides[slide].title}</h2>
            <p className="carousel_desc">{slides[slide].desc}</p>
            <div className="carousel_technologiesUsedCnt">
              <p>Used technologies:</p>
              <div className="carousel_technologiesUsed">
                {techArray(slides[slide].technologies)}
              </div>
            </div>
            <div className="carousel_links">
              <a
                href={slides[slide].webLink}
                className="carousel_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                See project &#10230;
              </a>
              <a
                href={slides[slide].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel_link"
              >
                Dive into code &#10230;
              </a>
            </div>
          </div>
        </CSSTransition>
        <div className="carousel_buttons">
          <button className="carousel_button" onClick={handleClickPrev}>
            &#8678;
          </button>
          <button className="carousel_button" onClick={handleClickNext}>
            &#8680;
          </button>
        </div>
      </div>
      <div className="carousel_images">
        <div className="carousel_image-box carousel_image-box--1">
          <CSSTransition
            key={`image1-${slide}`}
            in={true}
            appear={true}
            timeout={400}
            classNames="slideR"
          >
            <img
              src={slides[slide].img1}
              alt={slides[slide].title}
              className="carousel_image carousel_image--1"
            />
          </CSSTransition>
        </div>
        <div className="carousel_image-box carousel_image-box--2">
          <CSSTransition
            key={`image2-${slide}`}
            in={true}
            appear={true}
            timeout={400}
            classNames="slideR"
          >
            <img
              src={slides[slide].img2}
              alt={slides[slide].title}
              className="carousel_image carousel_image--2"
            />
          </CSSTransition>
        </div>
        <div className="carousel_image-box carousel_image-box--3">
          <CSSTransition
            key={`image3-${slide}`}
            in={true}
            appear={true}
            timeout={400}
            classNames="slideR"
          >
            <img
              src={slides[slide].img3}
              alt={slides[slide].title}
              className="carousel_image carousel_image--3"
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
