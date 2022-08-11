import React from 'react';
import './VideoCard.css';
import { Avatar } from '@mui/material';


function VideoCard({ image, title, channel, views, timestamp, channelImage })  {
  return (
    <div className="videoCard">
        <img className="videoCard_thumbnail" src={channelImage} alt=""
        width={400} height={400}
        />
        <div className="VideoCard_info"></div>
        <Avatar
         className="videoCard_avatar"
         alt={channel}
         src={image}
           />
           <div className="videoCard_text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
                   {views} . {timestamp}
               </p>
           </div>
           </div>
           
  );
}

export default VideoCard;
