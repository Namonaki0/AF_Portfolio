import React from "react";
import "./SoundCrash.scss";

const SoundCrash = () => {
  return (
    <div className="project main-project-three">
      <div className="image-wrapper">
        <a
          className="main-project-cta"
          href="https://www.soundcrashproject.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="main-project-span">EXPLORE</span>
          <img src="./assets/soundcrash.PNG" alt="sound crash " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">soundcrash</h2>
        <p>concept website for heavy music</p>
        <span>
          Integrated music player | Artist touring schedule search |
          Subscription service
        </span>
        {/* <div className="project-technologies">
              <i className="fab fa-html5" title="HTML"></i>
              <i className="fab fa-css3-alt" title="CSS"></i>
              <i className="fab fa-sass" title="Sass/Scss"></i>
              <i className="fab fa-js" title="Javascript"></i>
              <i className="fab fa-mailchimp" title="Mailchimp"></i>
            </div> */}
      </div>
    </div>
  );
};

export default SoundCrash;
