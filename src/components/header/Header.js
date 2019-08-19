import React from "react";
import Typist from "react-typist";
import { Animated } from "react-animated-css";
import Office from "../../video/Office3.mp4";

export default function Header() {
  return (
    <div
      id="home"
      style={{
        height: "100%",
        maxHeight: "100%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <video autoPlay muted loop id="myVideo">
        <source src={Office} type="video/mp4" />
      </video>
      <div
        className="header-typist-container"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Animated
            animationIn="slideInDown"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Typist
              startDelay={1000}
              className="header-typist-style"
              avgTypingDelay={130}
            >
              Hello! I'm Dominic
            </Typist>
          </Animated>
        </div>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
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
  );
}
