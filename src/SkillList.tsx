import React from "react";
import Skills from "./Skills";
import "./Styles.css";

function skillList() {
  const skillsArray = [
    { name: "HTML", level: "beginner", color: "blue" },
    { name: "CSS", level: "intermediate", color: "green" },
    { name: "JavaScript", level: "intermediate", color: "yellow" },
    { name: "React", level: "advanced", color: "purple" },
    { name: "Node.js", level: "intermediate", color: "orange" },
    { name: "Express.js", level: "intermediate", color: "teal" },
    { name: "Vue.js", level: "intermediate", color: "cyan" },
    { name: "Angular", level: "intermediate", color: "red" },
    { name: "MongoDB", level: "intermediate", color: "brown" },
    { name: "SQL", level: "intermediate", color: "pink" },
  ];

  return (
    <div className="skill-list">
      {/*  {skillsArray.map((skill) => (
        <Skills
          name={skill.name}
          emoji={skill.level}
          color={skill.color}
        ></Skills>
      ))} */}

      {skillsArray.map((skill) => (
        <Skills
          name={skill.name}
          level={skill.level}
          color={skill.color}
        ></Skills>
      ))}
    </div>
  );
}

export default skillList;
