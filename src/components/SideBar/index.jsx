import React from "react";
import "./index.css";
import SideBarRow from "../SideBarRow/SideBarRow";
// import { Avatar, IconButton } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";
import StarIcon from "@mui/icons-material/Star";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import source from "./download.jpg";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  padding: "25px 10px",
  flex: 0.33,
});

function SideBar(props) {
  //   const [{ user }, dispatch] = useStateValue();

  return (
    <Wrapper className="sideBar">
      <SideBarRow src={source} title="Saleh" />

      <SideBarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      {/* <SideBarRow srq={user.photURL} title={user.displayName} /> */}
      {/* src={user.photoURL} title={user.displyName} */}
      <SideBarRow Icon={GroupIcon} title="Friends" />
      <SideBarRow Icon={GroupsIcon} title="Groups" />
      <SideBarRow Icon={FlagIcon} title="Pages" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={OndemandVideoIcon} title="Watch" />
      <SideBarRow Icon={HistoryIcon} title="Memories" />
      <SideBarRow Icon={BookmarkIcon} title="Saved" />
      <SideBarRow Icon={EventAvailableIcon} title="Events" />
      <SideBarRow Icon={EventNoteIcon} title="Most Recent" />
      <SideBarRow Icon={StarIcon} title="Favorites" />
      <SideBarRow Icon={ArrowDropDownCircleIcon} title="See more" />
    </Wrapper>
  );
}

export default SideBar;
