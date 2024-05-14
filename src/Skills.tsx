import React from "react";
interface skillProps {
  name: string;
  level: string;
  color: string;
}
function Skills({ name, level, color }: skillProps) {
  // const a = true;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{name}</p>
      <p>
        {/* <p>
          {a ? "The given condition is true" : "The given condition is false"}
        </p> */}
        {level === "intermediate" ? "👍" : level === "beginner" ? " 😊" : "💪"}
      </p>
    </div>
  );
}

/* function abc(a: number, b: number, c?: number) {
  return c ? a + b + c : a + b;
}
abc(10, 20, 30); */
export default Skills;
