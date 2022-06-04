import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiFirebase,
  SiMailchimp,
} from "react-icons/si";

const movieLibraryImage = require("../../assets/movielibrary.jpg");
const noteKeepImage = require("../../assets/notekeep.PNG");
const smartCourseImage = require("../../assets/smartcourse.PNG");

const MainProjectsInfo = () => {
  return [
    {
      name: "movie library",
      imageURL: movieLibraryImage,
      description: "your personal desktop movie database implemented in React",
      features:
        "Browse through movie library | Comment about your favorite movies | Authentication",
      technologies: SiHtml5,
      SiCss3,
      SiJavascript,
      SiFirebase,
      url: null,
    },
    {
      name: "smartcourse",
      imageURL: smartCourseImage,
      description: "concept website for online learning",
      features: "Login system | Course filter function | Subscription service",
      technologies: SiHtml5,
      SiCss3,
      SiJavascript,
      SiFirebase,
      SiMailchimp,
      url: null,
    },
    {
      name: "notekeep",
      imageURL: noteKeepImage,
      description: "note keeping website",
      features: "local storage | add, edit & delete functionality",
      technologies: SiHtml5,
      SiCss3,
      SiJavascript,
      url: null,
    },
    {
      name: "soundcrash",
      imageURL: movieLibraryImage,
      description: "concept website for heavy music",
      features:
        "Integrated music player | Artist touring schedule search | Subscription service",
      technologies: SiHtml5,
      SiCss3,
      SiSass,
      SiJavascript,
      SiFirebase,
      SiMailchimp,
      url: null,
    },
  ];
};

export default MainProjectsInfo;
