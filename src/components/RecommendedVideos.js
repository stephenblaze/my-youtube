import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function Recommendedvideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos_Videos'>
          <VideoCard
          title="Burna Boy - Last Last[Official Music Video] Reaction"
          views="369 Views"
          timestamp="8 hours ago"
          channelImage="https://i.ytimg.com/vi/5dp8bKcdLG0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYuFt5DGjoi7Q7Yo-vcX2xeWCEPw"
          channel="Banks' Reactions"
          image="https://yt3.ggpht.com/zauzIqrBaKHq0DrlAmbbM-Wa7y0BCewsx1dk28YjFiWhi2imX74bjOZ-eca42gKIi7raR1PckQ=s68-c-k-c0x00ffffff-no-rj"
           
           />
          <VideoCard
          title="Puma- The Mountain Lion "
          views="252 Views"
          timestamp="1 day ago"
          channelImage="https://c0.wallpaperflare.com/preview/823/812/931/animal-close-up-cougar-elegant.jpg"
          channel="I_am_puma"
          image="https://yt3.ggpht.com/ytc/AMLnZu_P_JObUUS81sxWZCXsyp8M0HJ8y0DwVy3I_F1FcQ=s88-c-k-c0x00ffffff-no-rj" />

          <VideoCard
          title="P-SQUARE ARE BACK!!! P-Square - Jaiye / CUBREACTS UK ANALYSIS VIDEO"
          views="300 Views"
          timestamp="5 hours ago"
          channelImage="https://i.ytimg.com/vi/IakKkMuOGj8/maxresdefault.jpg"
          channel="CubTV"
          image="https://yt3.ggpht.com/CWVV9jr0lv5ol_Yyc9Nfct5FSI6Ay1gvmIHDuR-DZK-N8aTL_nY0qhbcV162WYYEJfPE3PdDmQ=s88-c-k-c0x00ffffff-no-rj"
           />

          <VideoCard
          title="OXLADE IS IN A LEAGUE OF HIS OWN! | OXLADE - KU LO SA | A COLORS SHOW // REACTION &#38; VIDEO" 
          views="800 Views"
          timestamp="15 hours ago"
          channelImage="https://i.ytimg.com/vi/m-UpXODk7GY/maxresdefault.jpg"
          channel="CubTV"
          image="https://yt3.ggpht.com/CWVV9jr0lv5ol_Yyc9Nfct5FSI6Ay1gvmIHDuR-DZK-N8aTL_nY0qhbcV162WYYEJfPE3PdDmQ=s88-c-k-c0x00ffffff-no-rj" />


          <VideoCard
          title="Build a Todo App with Solidity, Next.js &#38; Truffle "
          views="1K Views"
          timestamp="5 mins ago"
          channelImage="https://i.ytimg.com/vi/awQTDVvYyjI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDupjbRHo8gUscU4L-MXI9mbtriJg"
          channel="Clever Programmer"
          image="https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo" />


          <VideoCard
          title="HIGHLIGHTS | Liverpool 3-1 Man City | Community Shield"
          views="100,972 Views"
          timestamp="8 hours ago"
          channelImage="data:image/jpeg;base64,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"
          channel="Manchester City"
          image="https://yt3.ggpht.com/ytc/AMLnZu9rsW6BW9_Bx_J42oOwfyecSvTf7CvJLc9hbPu2xX4=s88-c-k-c0x00ffffff-no-rj" />
          
          
          <VideoCard
          title="American Celebrities Go Crazy As They Dance To Burna Boy Hit Single Last Last"
          views="5,983 Views"
          timestamp="Jul 18, 2022"
          channelImage="https://i.ytimg.com/vi/6Jdwd1Oc2IA/hqdefault.jpg"
          channel="Banks' Reactions"
          image="https://yt3.ggpht.com/WA9qWvXJw1r7EpPZi9XI5TAy-EIt4pehBvGoDZGxEK9vZihWlRqT2R_p9Z98ZmFQBh7GqbnhVg=s88-c-k-c0x00ffffff-no-rj" />
          
          <VideoCard
          title="Burna Boy Goes Shopping for Sneakers at Kick Game"
          views="471K Views"
          timestamp="2 Weeks ago"
          channelImage="data:image/jpeg;base64,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"
          channel="KICK GAME"
          image="https://yt3.ggpht.com/3isCStrlOPVkLdcoNIZQ3XEgpxFCxZ0-HOsGHO7G0IsmV01fw9IYjNg7ZdGlc4nJjglRD8rh=s88-c-k-c0x00ffffff-no-rj" />
          
          
          <VideoCard
          title="Burna Boy - Last Last[Official Music Video] Reaction"
          views="26,722 Views"
          timestamp="Jul 21, 2022"
          channelImage="https://i.ytimg.com/vi/CDHqA4Pa6hA/maxresdefault.jpg"
          channel="The Beat99.9FM"
          image="https://yt3.ggpht.com/ytc/AMLnZu--RE4AbKQ-Y_KJBnwqPviY4q3uVy-r10O3GMHXig=s48-c-k-c0x00ffffff-no-rj" />
          
        </div>
        </div>
  )
}

export default Recommendedvideos;