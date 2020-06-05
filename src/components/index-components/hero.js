import React, {useState} from "react"
import style from "./hero.module.scss"
import { Link } from "gatsby"
import OverviewVid from "../../videos/overview-verysmall.mp4";
import VideoCover from "../../images/cover.jpg"
import VideoPlayer from "../videoPlayer";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={style.container}>
    {showVideo ? <> <div className={style.close} role="button" tabIndex="0" onKeyPress={() =>''} onClick={() => setShowVideo(false)}> <i className={`fas fa-times`}></i></div> <VideoPlayer video={OverviewVid} track="../../videos/overviewCap.vtt"></VideoPlayer> </> : null}
   
      <div className={style.leftHolder}>
      <div className={style.responsiveVideo}>
      <video className={style.responsiveVideo} controls poster={VideoCover}>
        
  <source src={OverviewVid} type="video/mp4"/>
  <track src="../../videos/overviewCap.vtt" kind="captions" srclang="en" label="English"/>
  Your browser does not support the video tag. Please view our video on Youtube @ Pulse For Good.
</video>
      </div>
        <div className={style.headline}>
          There's a better way to gather client feedback
        </div>
        <div className={style.details}>
          Continuously collect onsite client feedback with simple kiosks and
          review the data through a data dashboard, helping you dedicate more
          resources to what you do best.
        </div>
        <div className={style.detailIcons}>
          <div className={style.detailRow}>
            <div className={style.detailItem}>
              <i className={`fa fa-laptop ${style.purple}`}></i>Hardware and software
            </div>
            <div className={style.detailItem}>
              <i className={`fas fa-chart-line ${style.purple}`}></i>Data Dashboard
            </div>
          </div>
          <div className={style.detailRow}>
            <div className={style.detailItem}>
            <i className={`fas fa-bullhorn ${style.purple}`}></i> Mounted Kiosks
            </div>
            <div className={style.detailItem}>
              <i className={`fas fa-comments ${style.purple}`}></i>Continous feedback gathering
            </div>
          </div>
        </div>
        <div className={style.buttonHolder}>
        <Link className={style.demo} to="/demo">Schedule Demo</Link>
        <a className={style.tryit} href="/tryitout">Try it out</a></div>
      </div>
      <div className={style.rightHolder}>
        <div className={style.imageHolder}>
        <div>
        <i onClick={() => setShowVideo(true)} role="button" tabIndex="0" onKeyPress={() =>''} className={`fas fa-play ${style.bigplay}`}></i>
       
        </div>
       
          {/* <Img
            className={style.kiosk}
            fluid={data.kioskImage.childImageSharp.fluid}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
