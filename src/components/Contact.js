import React from "react";
import "../styles/contact.css";
import Squares from "./svg/Squares";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      mail: "arielbiernacki@gmail.com",
      phone: "+48 784 017 995",
    };

    this.contactIcons = React.createRef();
    this.contactInfoContainer = React.createRef();
    this.mailIcon = React.createRef();
    this.phoneIcon = React.createRef();
  }

  onContactButtonClick(e) {
    e.preventDefault();

    this.mailIcon.current.classList.remove("contact_icon_active");
    this.phoneIcon.current.classList.remove("contact_icon_active");
    this.contactIcons.current.classList.add("contact_icons_active");

    let chosenIcon = e.target.closest(".contact_icon");
    chosenIcon.classList.add("contact_icon_active");

    setTimeout(() => {
      let chosenContactOption = e.target.closest(["button"]).dataset.type;
      this.contactInfoContainer.current.innerHTML =
        this.state[chosenContactOption];
    }, 200);
  }

  render() {
    return (
      <div className="contact_container">
        <div className="container_text_section">
          <h2 className="section_title">Contact</h2>
          <div className="contact_information">
            <div className="contact_textCnt">
              <p>
                You can find additional info about me on my LinkedIn profile and
                my projects on Github.
              </p>
              <p>
                Should you need any further information, please do not hesitate
                to contact me via e-mail or phone.
              </p>
            </div>
            <div className="contact_iconsCnt">
              <div className="contact_icons" ref={this.contactIcons}>
                <div className="contact_icon">
                  <a
                    href="https://github.com/ArlBiern"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 64 64" className="contact_icon_gh">
                      <path
                        className="fil_light"
                        d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="contact_icon">
                  <a
                    href="https://www.linkedin.com/in/arielbiernacki/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 382 382" className="contact_icon_li">
                      <path
                        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
    C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
    H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
    c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
    s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
    c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
    c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
    c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
    L341.91,330.654L341.91,330.654z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="contact_icon" ref={this.mailIcon}>
                  <button
                    onClick={this.onContactButtonClick.bind(this)}
                    data-type="mail"
                  >
                    <svg viewBox="0 0 512 512" className="contact_icon_mail">
                      <g>
                        <g>
                          <path
                            d="M508.65,115.988L363.186,261.451l141.875,141.979c4.295-7.385,6.939-15.85,6.939-24.992V133.563
        C512,127.357,510.722,121.476,508.65,115.988z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M461.913,83.476H50.087c-8.327,0-16.066,2.236-22.982,5.847L245.76,307.976c6.344,6.344,17.363,6.344,23.596,0
        l217.626-217.52C479.58,86.133,471.088,83.476,461.913,83.476z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M4.201,113.611C1.527,119.733,0,126.465,0,133.563v244.875c0,8.997,2.573,17.327,6.743,24.632l143.407-143.51
        L4.201,113.611z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M339.478,285.159l-46.414,46.525c-19.496,19.275-51.084,19.591-70.901,0l-48.306-48.417L32.006,425.017
        c5.625,2.192,11.69,3.507,18.081,3.507h411.826c6.235,0,12.146-1.284,17.657-3.376L339.478,285.159z"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="contact_icon" ref={this.phoneIcon}>
                  <button
                    onClick={this.onContactButtonClick.bind(this)}
                    data-type="phone"
                  >
                    <svg
                      viewBox="0 0 414.937 414.937"
                      className="contact_icon_phone"
                    >
                      <path
                        d="M159.138,256.452c37.217,36.944,80.295,72.236,97.207,55.195c24.215-24.392,39.12-45.614,92.854-2.761
      c53.734,42.874,12.696,71.727-10.757,95.363c-27.064,27.269-128.432,1.911-228.909-97.804C9.062,206.71-17.07,105.54,10.014,78.258
      c23.46-23.637,52.006-64.879,95.254-11.458c43.269,53.394,22.161,68.462-2.054,92.861
      C86.31,176.695,121.915,219.501,159.138,256.452z M213.104,80.203c0,0-11.227-1.754-19.088,6.113
      c-8.092,8.092-8.445,22.032,0.082,30.552c5.039,5.039,12.145,6.113,12.145,6.113c13.852,2.598,34.728,6.997,56.944,29.206
      c22.209,22.208,26.608,43.084,29.206,56.943c0,0,1.074,7.106,6.113,12.145c8.521,8.521,22.46,8.174,30.552,0.082
      c7.861-7.86,6.113-19.087,6.113-19.087c-4.399-28.057-17.999-57.365-41.351-80.716C270.462,98.203,241.153,84.609,213.104,80.203z
       M318.415,96.958c40.719,40.719,58.079,86.932,52.428,124.379c0,0-1.972,11.859,5.773,19.604
      c8.718,8.718,22.535,8.215,30.695,0.062c5.243-5.243,6.385-13.777,6.385-13.777c4.672-32.361-1.203-97.464-64.647-160.901
      C285.605,2.887,220.509-2.988,188.147,1.677c0,0-8.527,1.136-13.777,6.385c-8.16,8.16-8.656,21.978,0.061,30.695
      c7.746,7.746,19.604,5.773,19.604,5.773C231.484,38.879,277.696,56.24,318.415,96.958z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="contact_outputInfo"
                ref={this.contactInfoContainer}
              ></div>
            </div>
          </div>
        </div>
        <div className="squares_container squares_bottom">
          <Squares />
        </div>
        <div className="footer">
          <div className="footer_text">
            &#169; NeatIT 2021 - {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
