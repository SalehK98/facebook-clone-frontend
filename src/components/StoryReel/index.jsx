import React from "react";
import img from "./stroy.jpg";
import img2 from "./dl.jpg";
import img3 from "./instagram-story-hacks-15.png";

import profilePic from "./downloadx.jpg";
import Story from "../Story";

function StoryReel() {
  return (
    <div style={{ display: "flex" }} className="storyReel">
      <Story image={img} profilePic={profilePic} title="Saleh222" />
      <Story image={img2} profilePic={profilePic} title="Saleh333" />
      <Story image={img3} profilePic={profilePic} title="Saleh444" />
    </div>
  );
}

export default StoryReel;
