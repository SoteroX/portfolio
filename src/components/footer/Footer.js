import React from "react";

export default function Footer() {
  return (
    <div id="contact" className="footer-section">
      <div className="container footer-container">
        <div className="row">
          <div className="col-sm-12 footer-contact-col">
            <h3 className="footer-contact-header">Contact:</h3>
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
        </div>
        <div className="row footer-nav">
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
