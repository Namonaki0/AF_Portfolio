import React from "react";

const BeatMaker = () => {
  return (
    <div className="mini-project mini-project-two">
      <div className="mini-image-wrapper">
        <a
          href="https://beatmakerproject.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./projectPictures/beatmaker.PNG" alt="beatmaker project" />
          <span className="knockout-text">Beat Maker</span>
        </a>
      </div>
      <div className="mini-project-description">
        <h2>#2</h2>
        <div className="mini-project-description-topic">
          <p>Create your own electronic beats.</p>
          <span>BPM range | instrument selection | basic controls</span>
        </div>
      </div>
    </div>
  );
};

export default BeatMaker;
