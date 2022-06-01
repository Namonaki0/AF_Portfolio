import React from "react";
import "./MovieLibrary.scss";

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
          <img src="./assets/movie-library.jpg" alt="movie library " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">movie library</h2>
        <p>your personal desktop movie database implemented in React</p>
        <span>
          Browse through movie library | Comment about your favorite movies |
          Authentication
        </span>
        {/* <div className="project-technologies">
              <i className="fab fa-react" title="ReactJS"></i>
              <i className="fab fa-js" title="Javascript"></i>
              <i className="fab fa-sass" title="Sass/Scss"></i>
              <div className="firebase-wrapper" title="Firebase">
                <img src="/assets/firebase.png" alt="firebase icon" />
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default MovieLibrary;
