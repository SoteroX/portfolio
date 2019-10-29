import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div id="projects" className="project-section">
      <div className="container">
        <div className="row project-header">
          <h1>Projects</h1>
        </div>
        <div>
          <p className="lead project-warning">
            *Projects that are hosted on Heroku might take a few seconds to
            startup
          </p>
        </div>
        <div className="row" style={{}}>
          <ProjectCards />
        </div>
      </div>
    </div>
  );
}

export default Projects;
