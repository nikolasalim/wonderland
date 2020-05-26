import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "./ProjectList";
import allProjects from "../allProjects";

import classes from "./ProjectListContainer.module.css";

function ProjectListContainer() {
  return (
    <div className={classes.body}>
      <div>
        {allProjects.map((project) => {
          return (
            <ProjectList
              key={project.id}
              id={project.id}
              thumbName={project.thumbName}
              thumb={project.thumb}
            />
          );
        })}
        <Link to="project/nontech" className={classes.text}>
          <ProjectList
            key={"nontech"}
            id={"nontech"}
            thumbName={"NON-TECH"}
            thumb={
              "https://drive.google.com/uc?id=1my6XUu2Xw6vw85GaVS5wW6hJKjPfiYgg"
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default ProjectListContainer;
