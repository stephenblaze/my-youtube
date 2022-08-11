import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'; 
import SidebarRow from './SidebarRow';

import "./Sidebar.css";

function Sidebar () {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription"/>
      <hr />
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title= "History" />
      <SidebarRow Icon={OndemandVideoIcon} title= "Your Videos" />
      <SidebarRow Icon={WatchLaterOutlinedIcon} title= "Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title= "Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title= "Show more" />
      <hr />
      </div>
  );
}

export default Sidebar;
