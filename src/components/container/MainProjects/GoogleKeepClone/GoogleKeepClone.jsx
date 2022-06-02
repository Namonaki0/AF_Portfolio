import React from "react";
import "./GoogleKeepClone.scss";

import "./GoogleKeepClone.scss";

const GoogleKeepClone = () => {
  return (
    <div className="project main-project-two">
      <div className="image-wrapper">
        <a
          className="main-project-cta"
          href="https://www.notekeepproject.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="main-project-span">EXPLORE</span>
          <img src="./assets/google-keep-clone.PNG" alt="Google keep clone " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">notekeep</h2>
        <p>note keeping website</p>
        <span> local storage | add, edit & delete functionality </span>
        {/* <div className="project-technologies">
              <i className="fab fa-html5" title="HTML"></i>
              <i className="fab fa-css3-alt" title="CSS"></i>
              <i className="fab fa-js" title="Javascript"></i>
            </div> */}
      </div>
    </div>
  );
};

export default GoogleKeepClone;
