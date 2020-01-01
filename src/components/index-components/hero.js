import React, {useState} from "react"
import style from "./hero.module.scss"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import OverviewVid from "../../videos/overview-small.mp4";
import VideoCover from "../../images/cover.jpg"
import VideoPlayer from "../videoPlayer";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      kioskImage: file(relativePath: { eq: "kiosk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kioskIcon: file(relativePath: { eq: "kioskdrawing.jpg" }) {
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
    {showVideo ? <> <div className={style.close} onClick={() => setShowVideo(false)}> <i className={`fas fa-times`}></i></div> <VideoPlayer video={OverviewVid}></VideoPlayer> </> : null}
   
      <div className={style.leftHolder}>
      <div className={style.responsiveVideo}>
      <video className={style.responsiveVideo} controls poster={VideoCover}>
  <source src={OverviewVid} type="video/mp4"/>
  Your browser does not support the video tag.s
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
        <a className={style.demo} href="#signIn">Schedule Demo</a>
        <a className={style.tryit} href="#schedule">Try it out</a></div>
      </div>
      <div className={style.rightHolder}>
        <div className={style.imageHolder}>
        <div>
        <i onClick={() => setShowVideo(true)} className={`fas fa-play ${style.bigplay}`}></i>
       
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
