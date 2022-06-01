import React from "react";
import "./SmartCourse.scss";

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
          <img src="./assets/smartcourse.PNG" alt="smart course " />
        </a>
      </div>

      <div className="project-description">
        <h2 className="main-project-title">smartcourse</h2>
        <p>concept website for online learning</p>
        <span>
          Login system | Course filter function | Subscription service
        </span>
        {/* <div className="project-technologies">
              <i className="fab fa-html5" title="HTML"></i>
              <i className="fab fa-css3-alt" title="CSS"></i>
              <i className="fab fa-js" title="Javascript"></i>
              <i className="fab fa-mailchimp" title="Mailchimp"></i>
              <div className="firebase-wrapper" title="Firebase">
                <img src="/assets/firebase.png" alt="firebase icon" />
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default SmartCourse;
