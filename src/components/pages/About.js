import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import PageTransition from "../PageTransition";

const Skills = () => {
  return (
    <div>
      <PageTransition />

      <div className="about">
        <div className="core-tech">
          <h2>Core technologies</h2>
          <ul>
            <a
              href="https://developer.mozilla.org/fi/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </li>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon icon={faCss3} /> CSS3
              </li>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon icon={faJs} /> JavaScript
              </li>
            </a>

            <a
              href="https://reactjs.org/"
              className="react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon icon={faReact} /> React
              </li>
            </a>

            <a
              href="https://nodejs.org/en/"
              className="node"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon icon={faNodeJs} /> NodeJs
              </li>
            </a>
          </ul>
        </div>

        <div className="tools">
          <h2>tools</h2>
          <ul>
            <a
              href="https://jestjs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Jest</li>
            </a>

            <a
              href="https://eslint.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>EsLint</li>
            </a>

            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Sass</li>
            </a>

            <a
              href="https://docs.npmjs.com/about-npm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Npm</li>
            </a>

            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Git</li>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>GitHub</li>
            </a>
          </ul>
        </div>

        <div className="libraries">
          <h2>Major Libraries</h2>
          <ul>
            <a
              href="http://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Express</li>
            </a>

            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Axios</li>
            </a>

            <a
              href="https://mongoosejs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Mangoose</li>
            </a>

            <a
              href="https://nodemon.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Nodemon</li>
            </a>

            <a
              href="https://greensock.com/gsap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>GSAP</li>
            </a>
          </ul>
        </div>

        <div className="frameworks">
          <h2>Front-end Frameworks</h2>
          <ul>
            <a
              href="https://materializecss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>MaterializeCSS</li>
            </a>

            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Bootstrap</li>
            </a>
          </ul>
        </div>

        <div className="learning">
          <h2>Learning</h2>
          <ul>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Redux</li>
            </a>

            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>GraphQl</li>
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>TypeScript</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
