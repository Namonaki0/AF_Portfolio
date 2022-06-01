const Profile = () => {
  return (
    <section className="profile">
      <div className="font-awesome-icon"></div>
      <div className="profile-wrapper">
        <div className="profile-pic-wrapper">
          <img src="./assets/profile-picture.JPG" alt="profile" />
        </div>
        <div className="profile-main-details">
          <p className="name">Andre Ferreira</p>
          <p className="job-title">Front-End Developer</p>
          <div className="contact-wrapper">
            <div className="contact">
              <div className="email-wrapper">
                <i className="far fa-envelope"></i>
                <p className="email">andreferreira@live.co.uk</p>
              </div>
              <div className="phone-wrapper">
                <i className="fas fa-mobile-alt"></i>
                <p className="phone-number">07523039428</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Namonaki0"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/andre-ferreira-37835b53/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <blockquote className="profile-description">
            <i className="fas fa-quote-left"></i>Learning Web Development every
            day, always eager to learn new tech and constantly working hard.
            Creativity and problem-solving is paramount.
            <i className="fas fa-quote-right"></i>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Profile;
