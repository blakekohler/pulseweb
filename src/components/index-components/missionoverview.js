import React, {useState} from "react"
import style from "./missionoverview.module.scss"
import { useStaticQuery, graphql } from "gatsby"

import VideoPlayer from "../videoPlayer";
import OverviewVid from "../../videos/mission-video.mp4";

const MissionOverview = () => {
    const [showVideo, setShowVideo] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      feature1: file(relativePath: { eq: "kioskdrawing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feature2: file(relativePath: { eq: "dashboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      customer3: file(relativePath: { eq: "court.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={style.container}>
    <div className={style.row}>
    {showVideo ? <> <div className={style.close} onClick={() => setShowVideo(false)}> <i className={`fas fa-times`}></i></div> <VideoPlayer video={OverviewVid}></VideoPlayer> </> : null}

      <h1 className={style.headline}>Our Mission & Impact</h1>
      
      <div className={style.featureRow}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <p>Pulse For Good is devoted to helping vulnerable communities by supporting those that serve them. We provide a safe place for individuals to share feedback regarding the assistance they receive without fear of retribution.</p>
          <p>As part of our mission, we also ensure we have a secondary impact on top of the services rendered by our feedback system. For every survey response, we make a small monetary donation. </p>
          <div className={style.seemore}>Learn More</div>{" "}

          </div>
         
        </div>
        <div className={style.featureImageLeft}>
        <div className={style.videoCover}>
        <i onClick={() => setShowVideo(true)} className={`fas fa-play ${style.bigplay}`}></i>
        {/* <img className={style.videoCover} src={VideoCover}/> */}
        </div>
       
            </div>
      </div>
      </div>
    </div>
  )
}

export default MissionOverview
