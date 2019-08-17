import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Footer() {
  return (
    <div id="contact" className="container-fluid footer-container">
      <div className="row footer-row">
        <div className="col-12 col-md-4 footer-sections footer-twitter-section">
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
          <a
            className="footer-contact-email"
            href="mailto:sotero1113@gmail.com"
            target="_top"
          >
            sotero1113@gmail.com
          </a>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/dominic-bales-4a2219117/"
              target="_blank"
              className="footer-social-links"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/SoteroX"
              target="_blank"
              className="footer-social-links"
            >
              <i className="fab fa-github-square" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/SoteroX13"
              target="_blank"
              className="footer-social-links"
            >
              <i className="fab fa-twitter-square" />
            </a>
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
          <a className="footer-links" href="#home">
            Home
          </a>
          <a className="footer-links" href="#skills">
            Skills
          </a>
          <a className="footer-links" href="#about">
            About
          </a>
          <a className="footer-links" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
