import React from "react";
import "./NoteKeep.scss";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const noteKeepImage = require("../../../../assets/notekeep.PNG");

const NoteKeep = () => {
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
          <img src={noteKeepImage} alt="Google keep clone " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">notekeep</h2>
        <p>note keeping website</p>
        <span> local storage | add, edit & delete functionality </span>
        <div className="project-technologies">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
        </div>
      </div>
    </div>
  );
};

export default NoteKeep;
