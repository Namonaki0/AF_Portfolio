import React from "react";

const skyEnviroImage = require("../../../../assets/skyenviro.PNG");

const SkyEnviro = () => {
  return (
    <div className="mini-project mini-project-four">
      <div className="mini-image-wrapper">
        <a
          href="https://www.skyenviroproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={skyEnviroImage} alt="skyenviro weather app" />
          <span className="knockout-text">skyenviro</span>
        </a>
      </div>
      <div className="mini-project-description">
        <h2>#3</h2>
        <div className="mini-project-description-topic">
          <p>Get the weather for any city.</p>
          <span>PWA | search input | search history</span>
        </div>
      </div>
    </div>
  );
};

export default SkyEnviro;
