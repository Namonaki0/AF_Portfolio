import React from "react";

const photoGenerationImage = require("../../../../assets/photogeneration.PNG");

const PhotoGeneration = () => {
  return (
    <div className="mini-project mini-project-one">
      <div className="mini-image-wrapper">
        <a
          href="https://photogeneration.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={photoGenerationImage} alt="photo_generation" />
          <span className="knockout-text">Photo Generation</span>
        </a>
      </div>
      <div className="mini-project-description">
        <h2>#1</h2>
        <div className="mini-project-description-topic">
          <p>Search a topic and get related pictures via API fetch.</p>
          <span>expand result | author link | image download</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoGeneration;
