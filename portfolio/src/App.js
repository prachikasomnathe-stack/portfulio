import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Main from "./component/main";

import Skill from "./component/skill";
import Education from "./component/education";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
