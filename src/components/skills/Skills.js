import React from "react";

function Skills() {
  return (
    <div id="skills" className="container skill-section">
      <div className="skill-content-area">
        <div className="row ">
          <div className="col">
            <h1 className="skill-header">Skills</h1>
          </div>
        </div>
        <div className="card-container row ">
          <div className="col-md col-sm-12 skill-col-style">
            <i className="fas fa-laptop-code"></i>
            <h3 className="skill-list-header">Frontend</h3>
            <ul className="skills-ul-list">
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>JavaScript/TypeScript</li>
              <li>jQuery</li>
              <li>React/Redux</li>
              <li>Bootstrap</li>
              <li>Semantic-UI</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div className="col-md  col-sm-12 skill-col-style">
            <i className="fas fa-database"></i>
            <h3 className="skill-list-header">Backend</h3>
            <ul className="skills-ul-list">
              <li>Node</li>
              <li>Express</li>
              <li>MYSQL</li>
              <li>MongoDB</li>
              <li>JWT</li>
              <li>Firebase</li>
              <li>RESTful API</li>
            </ul>
          </div>
          <div className="col-md  col-sm-12 skill-col-style">
            <i className="fas fa-wrench"></i>
            <h3 className="skill-list-header">Tools</h3>
            <ul className="skills-ul-list">
              <li>Azure DevOps</li>
              <li>Git</li>
              <li>Github</li>
              <li>Webpack</li>
              <li>Heroku</li>
              <li>NPM</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
