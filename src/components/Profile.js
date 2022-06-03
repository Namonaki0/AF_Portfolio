import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsEnvelope } from "react-icons/bs";
import { IoMdQuote } from "react-icons/io";
import { ImMobile2 } from "react-icons/im";

const profilePicture = require("../assets/profilepicture.JPG");

const Profile = () => {
  return (
    <section className="profile">
      <div className="font-awesome-icon"></div>
      <div className="profile-wrapper">
        <div className="profile-pic-wrapper">
          <img src={profilePicture} alt="profile" />
        </div>
        <div className="profile-main-details">
          <p className="name">Andre Ferreira</p>
          <p className="job-title">Front-End Developer</p>
          <div className="contact-wrapper">
            <div className="contact">
              <div className="email-wrapper">
                <BsEnvelope />
                <p className="email">andreferreira@live.co.uk</p>
              </div>
              <div className="phone-wrapper">
                <ImMobile2 />
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
            </div>
          </div>
          <blockquote className="profile-description">
            <IoMdQuote />
            Learning Web Development every day, always eager to learn new tech
            and constantly working hard. Creativity and problem-solving is
            paramount.
            <IoMdQuote />
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Profile;
