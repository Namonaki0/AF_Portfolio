import React from "react";
import "./SmartCourse.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiMailchimp,
} from "react-icons/si";

const smartCourseImage = require("../../../../assets/smartcourse.PNG");

const SmartCourse = () => {
  return (
    <div className="project main-project-one">
      <div className="image-wrapper">
        <a
          className="main-project-cta"
          href="https://www.smartcourseproject.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="main-project-span">EXPLORE</span>
          <img src={smartCourseImage} alt="smart course " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">smartcourse</h2>
        <p>concept website for online learning</p>
        <span>
          Login system | Course filter function | Subscription service
        </span>
        <div className="project-technologies">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiFirebase />
          <SiMailchimp />
        </div>
      </div>
    </div>
  );
};

export default SmartCourse;
