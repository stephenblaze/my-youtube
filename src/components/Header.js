import React, { useState } from "react";
import "./Header.css";
import youtubeImg from "../image/yp1.jpg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import youtubePic from "../image/yt.jpg";
import MenuIcon from '@mui/icons-material/Menu';



export default function Header() {
  return (
    <>
      <div className="header">
        <div className="all">
        <MenuIcon/>
        <div className="image"><img src={youtubeImg} width={80} height={30} /></div>
        </div>
        
        
        
        <div className="searcharea">
          {/* <div className="such"> */}
            <div className="search"><input type="search" placeholder="Search" /></div>
          {/* </div> */}
          {/* <div className="search"> */}
           
           <div className="searchicon"><SearchOutlinedIcon/></div>
           

            {/* </div> */}
        </div>

        

        <div>
          <div className="icons">
            <div classname="icon"><VideoCallOutlinedIcon /> </div>
            <div className="icon"><AppsOutlinedIcon /> </div>
            <div className="icon"> <NotificationsOutlinedIcon /> </div>
            <div><img src={youtubePic} className="tope" width={30} height={30} /></div>
          </div>
        </div>
      </div>
    </>
    
  );
}
