import { Avatar } from "@mui/material";
import "./index.css";
import React from "react";

function Story({ image, profilePic, title }) {
  return (
    <div className="story">
      <img src={image} alt="" className="story__avatar"></img>
      <div className="child">
        <Avatar src={profilePic} className="a" />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Story;
