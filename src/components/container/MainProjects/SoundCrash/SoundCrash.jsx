import React from "react";
import "./SoundCrash.scss";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiFirebase,
  SiMailchimp,
} from "react-icons/si";

const soundCrashImage = require("../../../../assets/soundcrash.PNG");

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
          <img src={soundCrashImage} alt="sound crash " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">soundcrash</h2>
        <p>concept website for heavy music</p>
        <span>
          Integrated music player | Artist touring schedule search |
          Subscription service
        </span>
        <div className="project-technologies">
          <SiHtml5 />
          <SiCss3 />
          <SiSass />
          <SiJavascript />
          <SiFirebase />
          <SiMailchimp />
        </div>
      </div>
    </div>
  );
};

export default SoundCrash;
