import React from "react";
import "./MovieLibrary.scss";
import { SiHtml5, SiCss3, SiJavascript, SiFirebase } from "react-icons/si";

const movieLibraryImage = require("../../../../assets/movielibrary.jpg");

const MovieLibrary = () => {
  return (
    <div className="project main-project-react">
      <div className="image-wrapper">
        <a
          className="main-project-cta"
          href="https://www.andreferreiradev-movielibrary.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="main-project-span">EXPLORE</span>
          <img src={movieLibraryImage} alt="movie library" />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">movie library</h2>
        <p>your personal desktop movie database implemented in React</p>
        <span>
          Browse through movie library | Comment about your favorite movies |
          Authentication
        </span>
        <div className="project-technologies">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiFirebase />
        </div>
      </div>
    </div>
  );
};

export default MovieLibrary;
