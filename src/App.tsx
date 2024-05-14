import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import About from "./About";
import SkillList from "./SkillList";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Image />
        <div className="data">
          <About />
          <SkillList></SkillList>
        </div>
      </div>
    </div>
  );
}

export default App;
