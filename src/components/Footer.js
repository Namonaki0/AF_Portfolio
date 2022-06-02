import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="sub-footer">
        <p class="domain">andreferreiradev.com</p>
        <p class="rights">all rights reserved 2022</p>
      </div>

      <div class="footer-social-links">
        <a
          href="https://github.com/Namonaki0"
          target="_blank"
          rel="noreferrer"
          class="github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/andre-ferreira-37835b53/"
          target="_blank"
          rel="noreferrer"
          class="linkedin"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://codepen.io/AndreFRFerreira/pens/public"
          target="_blank"
          rel="noreferrer"
          class="codepen"
        >
          <i class="fab fa-codepen"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
