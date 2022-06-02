import React from "react";

const PersonalDevelopment = () => {
  return (
    <section class="personal-development">
      <div class="pd-new-tech-hidden">
        <h3 class="pd-new-tech-hidden-title">currently learning</h3>
        <i class="fab fa-react"></i>
        <i class="fab fa-node-js"></i>
        <i class="fab fa-python"></i>
        <i class="fas fa-database"></i>
      </div>
      <div class="field-set-wrapper">
        <fieldset>
          <legend>personal development</legend>
          <p class="personal-development-description">
            I'm always eager to learn about the best tools in Web Development.
            It is vital to keep improving and being able to implement newly
            acquired knowledge to future projects.
          </p>
          <div class="personal-development-new-tech">
            <span>
              <i class="fab fa-react"></i>
            </span>
            <span>
              <i class="fab fa-node-js"></i>
            </span>
            <span>
              <i class="fab fa-python"></i>
            </span>
            <span>
              <i class="fas fa-database"></i>
            </span>
          </div>
          <p class="personal-development-end-line">
            If you enjoy what you see here, please drop a line.
          </p>
        </fieldset>
      </div>
    </section>
  );
};

export default PersonalDevelopment;
