import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt="project" />

      <h2 className="title">{project.title}</h2>
      <p className="quote">{project.quote}</p>
      <div className="links">
      {  project.linkCode && 
          <a
          href={project.linkCode}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Code
        </a>}
        
        {project.linkLive &&
 <a
 href={project.linkLive}
 target="_blank"
 rel="noopener noreferrer"
 className="link"
>
 See it live
</a>}
        
       
      </div>
    </div>
  );
};

export default Project;
