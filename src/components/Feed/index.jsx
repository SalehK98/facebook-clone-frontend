import React from "react";
import StoryReel from "../StoryReel";
import PostAdder from "../PostAdder";
import Post from "../Post_";
import profilePic from "./download.jpg";

function Feed() {
  return (
    <div
      className="feed"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        marginRight: "30px",
        marginLeft: "30px",
      }}
    >
      <StoryReel />
      <PostAdder />
      <Post
        profilePic={profilePic}
        post="yo yo"
        timestamp="1646516836000"
        imgName="imgName"
        username="Saleh"
      />
      {/* {postsData.map((entry) => (
        <Post
          profilePIc={entry.avatar}
          post={entry.text}
          timeStamp={entry.timeStamp}
          imgName={entry.imgName}
          username={entry.username}
        />
      ))} */}
    </div>
  );
}

export default Feed;
