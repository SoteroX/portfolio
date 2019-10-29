import React from "react";
import { list } from "./data";

function ProjectCards() {
  const projectList = list.map(val => {
    return (
      <div
        key={val.id}
        className="col-12 col-md-6 col-lg-4 flip-card flip-hover"
      >
        <div className="flip-card-inner shadow">
          <div className="flip-card-front">
            <img
              className="img-fluid"
              src={val.image}
              alt="Avatar"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            className="flip-card-back"
          >
            <div className="projects-card-header-container">
              <h1 className="projects-card-title">{val.title}</h1>
              <p className="projects-card-text">{val.description}</p>
            </div>

            <div style={{ paddingBottom: "15px" }} className="">
              {val.stack.map((val, idx) => {
                return (
                  <span
                    key={idx}
                    style={{
                      color: "#212121",
                      backgroundColor: "white",
                      fontSize: "14px"
                    }}
                    className="badge badge-pill"
                  >
                    {val}
                  </span>
                );
              })}
              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                {val.site ? (
                  <a
                    href={val.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="btn  projects-card-btn-outline"
                  >
                    View Site
                  </a>
                ) : null}
                {val.repo ? (
                  <a
                    href={val.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="btn  projects-card-btn"
                  >
                    View Repo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <React.Fragment>{projectList}</React.Fragment>;
}

export default ProjectCards;
