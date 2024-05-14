import React from "react";
import img from "./Assets/photo.jpeg";
import "./Styles.css";
function Image() {
  return <img src={img} alt="profileImage" className="avatar" />;
}

export default Image;
