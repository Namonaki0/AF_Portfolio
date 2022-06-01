import React from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import MainProjects from "./components/MainProjects";

const App = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <MainProjects />
      <div>Hello</div>
    </>
  );
};

export default App;
