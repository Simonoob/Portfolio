import React from "react";
import PageTransition from "../PageTransition";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      title: "GitHub Job finder",
      image: `${require("../../assets/job.finder.PNG")}`,
      quote:
        "A React application using the GitHub Jobs API to fetch and filter job posts in real time. The app uses hooks, Axios, and pagination to organize the job posts in batches of 50.",
      linkCode: "https://github.com/Simonoob/gh-job-post",
      linkLive: "https://eloquent-goldstine-61bd2a.netlify.app/",
    },
    {
      title: "Phonebook",
      image: `${require("../../assets/phonebook.PNG")}`,
      quote:
        "A back-end focused CRUD  React app using Node.js and a MongDB database. The single-page-app runs on a Node.js server, that serves as a middleware between the front-end and the database. The app also provides a fully functioning RESTful API that can be used independently to fetch or post data, without using the front-end.",
      linkCode:
        "https://github.com/Simonoob/-FULL-STACK-WEB-DEVELOPMENT-MOOC-2020-submissions-3.1-",
      linkLive: "http://vast-scrubland-10234.herokuapp.com/",
    },
    {
      title: "Book library",
      image: `${require("../../assets/book-library.PNG")}`,
      quote:
        "A CRUD application using realtime databases and user authentication from Firebase. It allows users to add books to a personal space, modify their state and sync data across devices.",
      linkCode: "https://github.com/Simonoob/Book-Library",
      linkLive: "https://simonoob.github.io/Book-Library/",
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
