import "./sideBarRow.css";
import React from "react";
import { Avatar } from "@mui/material";

function sideBarRow({ src, Icon, title }) {
  return (
    <div className="sideBarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <p>{title}</p>
    </div>
  );
}

export default sideBarRow;
