import React from "react";
import { list } from "./data";

export default function Projects() {
  const projectList = list.map(val => {
    return (
      <div
        key={val.id}
        className="col-12 col-md-4 flip-card flip-hover"
        // style={{ margin: "5px" }}
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

            <div style={{ paddingBottom: "15px" }} className="container">
              {val.stack.map((val, idx) => {
                return (
                  <span
                    key={idx}
                    style={{
                      color: "#212121",
                      backgroundColor: "#00ffa9"
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
                    className="btn btn-outline-success projects-card-btn-outline"
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
                    className="btn btn-success projects-card-btn"
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
  return (
    <div
      id="projects"
      className="container-fluid projects-section"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "#00ffa9" }}>Projects</h1>
      <p className="lead">
        *Projects that are hosted on Heroku might take a few seconds to startup
      </p>

      <div className="row" style={{ width: "100%" }}>
        {projectList}
      </div>
    </div>
  );
}
