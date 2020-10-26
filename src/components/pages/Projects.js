import React from "react";
import PageTransition from "../PageTransition";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      title: "Educated Football",
      image: `${require("../../assets/ed-football.PNG")}`,
      quote:
        "A Gatsby site for a Finnish football agency. \n It includes CSS modules, SEO optimization and uses Netlify CMS.\n The bult in CMS allows you to costumize every page, ads new ones and manage the blog section of the site.",
      linkLive: "https://educated-fotball.netlify.app/",
    },
    {
      title: "Happy fingers",
      image: `${require("../../assets/happy-finger.PNG")}`,
      quote:
        "Web resource to educate on finger injuries for climbers. \n It is a Progressive Web App (PWA) built using React,Gatsby, SASS, CSS modules. \n Built as a product for a local climbing gym.",
      linkCode:
        "https://github.com/Simonoob/Happy-fingers",
      linkLive: "https://happy-fingers.netlify.app/",
    },
    {
      title: "GitHub Job finder",
      image: `${require("../../assets/job.finder.PNG")}`,
      quote:
        "A React application using the GitHub Jobs API to fetch and filter job posts in real time. \n The app uses hooks, Axios, and pagination to organize the job posts in batches of 50.",
      linkCode: "https://github.com/Simonoob/gh-job-post",
      linkLive: "https://eloquent-goldstine-61bd2a.netlify.app/",
    },
    
    {
      title: "Phonebook",
      image: `${require("../../assets/phonebook.PNG")}`,
      quote:
        "A back-end focused CRUD app using Node.js, React, and a MongDB. The single-page-app runs on a Node.js server, that connects the front-end and the database. The app also provides a fully functioning RESTful API that can be used independently.",
      linkCode:
        "https://github.com/Simonoob/-FULL-STACK-WEB-DEVELOPMENT-MOOC-2020-submissions-3.1-",
      linkLive: "http://vast-scrubland-10234.herokuapp.com/",
    },
  ];

  return (
    <div className="projects">
      <PageTransition />
      <div className="projects-container">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
