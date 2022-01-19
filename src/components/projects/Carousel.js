import { useState, useEffect } from "react";
import slides from "./slides";
import "../../styles/carousel.css";
import { CSSTransition } from "react-transition-group";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const handleClickNext = () => {
    const newSlide = slide > 2 ? 0 : slide + 1;
    setSlide(newSlide);
  };
  const handleClickPrev = () => {
    const newSlide = slide < 1 ? 3 : slide - 1;
    setSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(handleClickNext, 4000);
    return () => clearInterval(interval);
  });

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
            <div className="carousel_links">
              <a href="#" className="carousel_link">
                Zobacz projekt &#10230;
              </a>
              <a href="#" className="carousel_link">
                Przeglądaj projekty &#10230;
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
