import React from "react"
import style from "./featureoverview.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeatureOverview = () => {
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
      <h1 className={style.headline}>Satisfaction gathering the easy way</h1>
      <div className={style.featureRow}>
        <div className={style.featureImageLeft}>
        <Img
              className={style.featurePic}
              fluid={data.feature1.childImageSharp.fluid}
            /></div>
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Physical kiosks installed in your facility</h2>
            We ship you a physical kiosk that is mounted within your building,
            providing your clients a quick, consistent way to leave feedback. No
            more dedicating resources to interviews, paper surveys, and
            spreadsheets.
          </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Online surveys available as well</h2>
            Want to reach even more people, no problem. The Pulse survey can be
            sent out digitally, allowing you to reach clients through email and
            outreach groups.
          </div>
        </div>
      </div>
      <div className={style.featureRow2}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Use the data dashboard to see trends</h2>
            Each survey is automatically consolidated into a data dashboard, which lets you filter and splice the data any way you see fit. You can see trends and anomalies in real time, allowing you to react and respond in a timely manner.
          </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Share your data</h2>
            Sharing your data is a simple as clicking a button. You can print, download, and send, helping you get the data to who needs to see it quickly.
          </div>
        </div>
        <div className={style.featureImageLeft}>
        <Img
              className={style.featurePic}
              fluid={data.feature2.childImageSharp.fluid}
            /></div>
      </div>
      </div>
    </div>
  )
}

export default FeatureOverview
