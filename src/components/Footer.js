import React from "react";

import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiCodepenLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="sub-footer">
        <p className="domain">andreferreiradev.com</p>
        <p className="rights">all rights reserved 2022</p>
      </div>

      <div className="footer-social-links">
        <a
          href="https://github.com/Namonaki0"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/andre-ferreira-37835b53/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://codepen.io/AndreFRFerreira/pens/public"
          target="_blank"
          rel="noreferrer"
          className="codepen"
        >
          <RiCodepenLine />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
