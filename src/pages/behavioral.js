import React from "react"
import style from "./behavioral.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
import becky from "../images/becky.jpg"
import filters from "../images/filters.jpg"
import homelessguy from "../images/homelessguy.jpg"
import dashboardsmall from "../images/dashboardsmall.jpg"
import weeklyreview from "../images/weeklyreview.jpg"
import kiosk from "../images/kiosk.jpg"
import valleykiosk from "../images/valleykiosk.png"
import julie from "../images/julie.jpg"
import melissa from "../images/melissa.jpg"

import blake from "../images/blake.jpg"
const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse for Behavioral Health providers" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Automated feedback for Behavioral Health providers  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
            Gain immediate insight into your client satisfaction 
            </div>
              <p>
          
When people are dealing with anxiety, depression, drug abuse, or other mental and behavioral challenges their entire life is affected.  So too are the lives of those around us.  We understand the complexity involved in collecting feedback from such a diverse group.  
                  </p>
                  <p>
                  The Pulse solution captures client feedback without effort on your part and transforms it into actionable data that can be used to improve services.  Data from Pulse can meet the metrics required by the Federal Government for Medicare.  The data dashboard also gives you an easy way to share what your teams are doing with the board or other funders.                  </p>
              <p>Use feedback to improve your organization and provide better services for those going through some of life's worst experiences.   </p>
              </div>
              <div className={style.right}>
              <iframe className={style.video} src="https://www.youtube.com/embed/9flVqovH73U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img src={valleykiosk} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  Having the right people at the table
                  </div>
                  <p>
                 Partnering with the right people can help your organization free up resources and maximize potential.  </p><p>Service providers are already maxed out on resources, time, and people. Using more of those resources to have an internal staff member create a survey, administer that survey, aggregate and analyze that data is often more than providers can do and spare.</p>
                  <a target="_blank" href="https://medium.com/pulse-for-good/having-the-right-people-at-the-table-8cb9cdc729fb?source=friends_link&sk=2d9cc44aef9892467d313eea1d274460" className={style.learnmore}>Read more</a>
                </div>
              </div>

<div className={style.featuresList}>
  <div className={style.feature}>
    <h3>Increase client engagement</h3>

    <ul>
      <li>Engage clients on their terms</li>
      <li>Receive 3 - 5 Submissions daily</li>
      <li>Learn what is working</li>
      <li>Resolve unseen concerns</li>
      <li>Uncover new solutions</li>
    </ul>
  </div>
  <div className={style.feature}>
    <h3>Save time and money</h3>

    <ul>
      <li>Reduce staff hours</li>
      <li>Eliminate data entry</li>
      <li>Aggregate responses</li>
      <li>Visualize real time data</li>
      <li>Compare trends</li>
    </ul>
  </div>
  <div className={style.feature}>
    <h3>Enhance funding discussions</h3>

    <ul>
      <li>Share client concerns</li>
      <li>Use reports in discussions</li>
      <li>Track key indicators</li>
      <li>Meet reporting requirements</li>
    </ul>
  </div>
</div>



            <div className={style.midHeader}>
            Build a culture of listening-Automatically
            </div>
<div className={style.testimonials}>
<div className={style.testSection}>
  <div><img className={style.personPic} src={becky}/></div>
  <div>
  <div className={style.personName}>Becky Brown </div>
<div className={style.personTitle}>COO - Valley Behavioral Health</div>
<div className={style.quote}>
  "Pulse For Good has allowed us opportunities to see deep down to see where there are wins that have been missed in the past."
</div>
  </div>
</div>
<div className={style.testSection}>
<div className={style.testSection}>
  <div><img className={style.personPic} src={melissa}/></div>
  <div>
  <div className={style.personName}>Melissa Edgeworth </div>
<div className={style.personTitle}>Director of Admin Services - Valley Behavioral Health</div>
<div className={style.quote}>
  "If you need to gather satisifaction surveys the Pulse kiosks are the way to go."
</div>
  </div>
</div>
</div>
<div className={style.testSection}>
<div className={style.testSection}>
  <div><img className={style.personPic} src={julie}/></div>
  <div>
  <div className={style.personName}>Jule Rael </div>
<div className={style.personTitle}>CCO- Valley Behavioral Health</div>
<div className={style.quote}>
  "(Pulse) creates a safe environment, gets in time data, and cuts out extra administrative time."
</div>
  </div>
</div>
</div>
</div>


            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Example
