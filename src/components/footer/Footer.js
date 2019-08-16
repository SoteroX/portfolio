import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Footer() {
  return (
    <div id="contact" className="container-fluid footer-container">
      <div className="row footer-row">
        <div className="col-12 col-md-4 footer-sections">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="SoteroX13"
            theme="dark"
            noFooter
            options={{ height: 200, width: 350 }}
          />
        </div>
        <div
          className="col-12 col-md-4 footer-sections"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h3>Contact me:</h3>
          <h6>sotero1113@gmail.com</h6>
          <div>
            <i className="fab fa-linkedin" />
            <i className="fab fa-github-square" />
            <i className="fab fa-twitter-square" />
          </div>
        </div>
        <div
          className="col-12 col-md-4"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
}
