import React, {useState} from "react"
import * as style from "./missionoverview.module.scss"
import { Link } from "gatsby"

import VideoPlayer from "../videoPlayer";
import OverviewVid from "../../videos/mission-video.mp4";

const MissionOverview = () => {
    const [showVideo, setShowVideo] = useState(false);

 
  return (
    <div className={style.container}>
    <div className={style.row}>
    {showVideo ? <> <div role="button" tabIndex="0" className={style.close} onKeyPress={(e) => ''} onClick={() => setShowVideo(false)}> <i className={`fas fa-times`}></i></div> <VideoPlayer video={OverviewVid}></VideoPlayer> </> : null}

      <h1 className={style.headline}>Our Mission & Impact</h1>
      
      <div className={style.featureRow}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <p>Pulse For Good is devoted to helping vulnerable communities by supporting those that serve them. We provide a safe place for individuals to share feedback regarding the assistance they receive without fear of retribution.</p>
          
          <Link className={style.seemore} to="/about">Learn More</Link>{" "}
          </div>
         
        </div>
        <div className={style.featureImageLeft}>
        <div className={style.videoCover}>
        <i role="button" tabIndex="0" onKeyPress={(e) => ''} onClick={() => setShowVideo(true)} className={`fas fa-play ${style.bigplay}`}></i>
        {/* <img className={style.videoCover} src={VideoCover}/> */}
        </div>
       
            </div>
      </div>
      </div>
    </div>
  )
}

export default MissionOverview
