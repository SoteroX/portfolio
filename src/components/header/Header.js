import React from "react";
import Typist from "react-typist";
import { Animated } from "react-animated-css";

function Header() {
  return (
    <div id="home" className="container-fluid header-section">
      <div className="typist-container">
        <div className="header-typist-container">
          <Animated
            animationIn="slideInDown"
            animationOut="fadeOut"
            isVisible={true}
            style={{ textAlign: "center" }}
          >
            <Typist
              startDelay={1000}
              className="header-typist-style"
              avgTypingDelay={130}
            >
              Hello! I'm Dominic
            </Typist>
          </Animated>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
            style={{ textAlign: "center" }}
          >
            <Animated
              animationIn="slideInDown"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Typist
                startDelay={2000}
                className="header-typist-style"
                avgTypingDelay={160}
              >
                And
              </Typist>
            </Animated>
          </Animated>
          <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Typist
              startDelay={2000}
              className="header-typist-style"
              avgTypingDelay={98}
            >
              I'm a Software Developer
            </Typist>
          </Animated>
        </div>
      </div>
    </div>
  );
}

export default Header;
