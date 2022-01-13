import React from "react";
import "../styles/aboutMe.css";
import CreateIcon from "./svg/CreateIcon";
import LearnIcon from "./svg/LearnIcon";
import ImproveIcon from "./svg/ImproveIcon";
import Arrow from "./svg/Arrow";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe_container">
        <div className="container_text_section">
          <h2 className="section_title">About Me</h2>
          <p className="section_text">
            I think that the main force that drives me is desire of creation and
            need of self-development. What is neat about code is the sheer
            breadth of possibilities. You can create something really useful or
            designed to challenge peoples way of thinking, but in addition you
            can explore science, mathematics, and other realms.
          </p>
          <p className="section_text">
            In addition to programming I also like to create things out of wood
            and other materials. You can see how I am doing on&nbsp;
            <a
              className="section_text_link"
              href="https://www.youtube.com/channel/UCH0oK8T2VmR6S6QAX8e3qwA"
              target="_blank"
              rel="noreferrer"
            >
              youtube channel
            </a>
            .
          </p>
        </div>
        <div className="aboutMe_icon_section">
          <div className="aboutMe_item">
            <div className="aboutMe_icon_cnt" data-order="1">
              <LearnIcon />
              <Arrow data-arrow="1" />
            </div>
            <h4 className="aboutMe_item_title">Learn</h4>
          </div>
          <div className="aboutMe_item">
            <div className="aboutMe_icon_cnt" data-order="2">
              <CreateIcon />
              <Arrow data-arrow="2" />
            </div>
            <h4 className="aboutMe_item_title">Create</h4>
          </div>
          <div className="aboutMe_item">
            <div className="aboutMe_icon_cnt" data-order="3">
              <ImproveIcon />
              <div className="aboutMe_mainArrow">
                <p className="aboutMe_mainArrowText">Repeat</p>
                <Arrow />
              </div>
            </div>
            <h4 className="aboutMe_item_title">Improve</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
