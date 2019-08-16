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
          <div className="flip-card-back">
            <h1>{val.title}</h1>
            <p>{val.description}</p>
            <div className="container">
              {val.stack.map((val, idx) => {
                return (
                  <span key={idx} className="badge badge-pill badge-success">
                    {val}
                  </span>
                );
              })}
            </div>
            <button onClick={() => console.log("click")}>click</button>
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
      <h1>Projects</h1>

      <div className="row" style={{ width: "100%" }}>
        {projectList}
      </div>
    </div>
  );
}
