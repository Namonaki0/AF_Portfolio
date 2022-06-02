import React from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import MainProjects from "./components/MainProjects";
import { PersonalDevelopment } from "./components/container";
import MiniProjects from "./components/MiniProjects";
import Communications from "./components/Communications";
import Footer from "./components/Footer";

import "./index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <MainProjects />
      <PersonalDevelopment />
      <MiniProjects />
      <Communications />
      <Footer />
    </>
  );
};

export default App;
