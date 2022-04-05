import { Avatar, Input } from "@mui/material";
import React from "react";
import profilePic from "./download.jpg";
import MyButton from "../Button";
import "./index.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";

function PostAdder() {
  const submitButtonSX = {
    // height: 0,
    // width: 0,
    // backGroundColor: "transparent",
    // color: "transparent",
    // border: "none",
    display: "none !important",
  };

  const [input, setInput] = React.useState("");
  const [image, setImage] = React.useState(null);
  const user = "Saleh";

  const handleSumbit = () => {
    console.log("submit");
  };
  const handlechange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <div className="postAdder">
      <div className="postAdder__top">
        <Avatar src={profilePic} />
        <form>
          <input
            type="text"
            className="postAdder__input"
            placeholder={`What's on your mind, ${user}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="postAdder__fileSelector"
            onChange={handlechange}
          />
          <MyButton
            onClick={handleSumbit}
            text="Hidden Sumbit"
            sx={submitButtonSX}
            hidden={true}
          />
        </form>
      </div>
      <div className="postAdder__bottom">
        <div className="postAdder__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="postAdder__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postAdder__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostAdder;
