import React from "react";

import {
  MovieLibrary,
  SmartCourse,
  GoogleKeepClone,
  SoundCrash,
} from "./container";

import "../index.scss";

const MainProjects = () => {
  return (
    <div className="section main-projects">
      <h1 className="main-projects-title">main projects</h1>

      <div className="inner-main-projects">
        <MovieLibrary />
        <SmartCourse />
        <GoogleKeepClone />
        <SoundCrash />
      </div>
    </div>
  );
};

export default MainProjects;
