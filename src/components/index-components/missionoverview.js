import React from "react"
import style from "./missionoverview.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import VideoCover from "../../images/videocover.png";

const MissionOverview = () => {
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
      <h1 className={style.headline}>Our Mission & Impact</h1>
      
      <div className={style.featureRow}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <p>Pulse For Good is devoted to helping vulnerable communities by supporting the groups that serve them. We help individuals have a safe place to share feedback regarding the assistance they receive without fear of retribution.  </p>
          <p>As part of our mission we also ensure we have a secondary impact, on top of the services rendered by our feedback system, by making a small monitary donation for every survey that is completed using our system. </p>
          <div className={style.seemore}>Learn More</div>{" "}

          </div>
         
        </div>
        <div className={style.featureImageLeft}>
        <div className={style.videoCover}>
        <i className={`fas fa-play ${style.bigplay}`}></i>
        {/* <img className={style.videoCover} src={VideoCover}/> */}
        </div>
       
            </div>
      </div>
      </div>
    </div>
  )
}

export default MissionOverview
