import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Widget from "../components/Widget/Widget";
// import useStateValue from "./StateProvider";
import React from "react";

function Home(props) {
  // [{ user }, dispatch] = useStateValue();
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "aliceblue",
        backgroundSize: "cover",
        padding: 8,
        // borderRadius: 4,
        // alignItems: "center",
        height: "100vh",
        margin: "0px",
        // justifyContent: "space-between",
        position: "relative",
      }}
    >
      <SideBar />
      <Feed />
      <Widget />
    </div>
  );
}

export default Home;
