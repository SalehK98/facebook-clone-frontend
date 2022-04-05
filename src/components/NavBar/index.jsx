import React from "react";
import { ReactComponent as Logo } from "../Facebook-f_Logo-Blue-Logo.wine.svg";
// import { styled } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { ReactComponent as FacebookMessengerIcon } from "./icons8-facebook-messenger.svg";
import { Avatar, IconButton, Input } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import { makeStyles, Theme, createStyles } from "@material-ui/styles";
import "./index.css";

// const div = styled("div")({
//   display: "flex",
//   alignItems: "center",
//   padding: "0 30px",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: "#eff2f5",
//     borderRadius: "10px",
//     alignItems: "center",
//     padding: "0 30px",
//     borderBottom: "none",
//     "& .MuiSvgIcon-root": {
//       color: "#2e81f4",
//     },
//   },
//   "& .MuiSvgIcon-root": {
//     color: "gray",
//   },
//   "& .Mui-active": {
//     borderBottom: "4px solid #2e81f4",
//     "& .MuiSvgIcon-root": {
//       color: "#2e81f4",
//     },
//   },
//   "&:active": {
//     borderBottom: "4px solid #2e81f4",
//     "& .MuiSvgIcon-root": {
//       color: "#2e81f4",
//     },
//   },
// });

function Nav(props) {
  return (
    <div className="header">
      <div className="header__left">
        <div>
          <Logo height={40} />
        </div>
        <div className="header__input">
          {/* <label> */}
          <SearchIcon />
          <input
            type="search"
            placeholder="Search Facebook"
            style={{
              border: "none",
              backgroundColor: "transparent",
              outlineWidth: 0,
            }}
          ></input>
          {/* </label> */}
        </div>
      </div>
      <div className="header__center">
        {/* {setActive(true)} */}
        <div className="header__option active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <OndemandVideoIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <GroupsIcon />
        </div>
        <div className="header__option">
          <ViewQuiltIcon />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="headre__info">
          <Avatar sx={{ height: "30px", width: "30px" }} />
          <h4
            style={{
              marginLeft: "10px",
            }}
          >
            Saleh
          </h4>
        </div>
      </div>
      <IconButton>
        <FacebookMessengerIcon />
      </IconButton>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ArrowDropDownCircleIcon />
      </IconButton>
    </div>
  );
}

export default Nav;
