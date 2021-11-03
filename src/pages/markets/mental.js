import React from "react"
import style from "./marketLanding.module.scss"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Container from "../../components/contentContainer"

import becky from "../../images/becky.jpg"

import bhuser from "../../images/bhuser.jpg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"

const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse for Mental Health providers" description="Pulse for Good helps Mental Health providers get feedback from the people they serve" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Our customers see a 330% increase in Medicaid compliance  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
            Gain immediate insight into your client satisfaction 
            </div>
              <p>
          
              Gathering client feedback is hard even in the best of situations. When working with those affected by anxiety, depression, drug abuse, or other mental and behavioral challenges, gathering feedback can be even harder.                  </p>
                  <p>
                  Having focused our entire solution on gathering feedback from vulnerable populations we understand the complexity involved in collecting feedback from this diverse group.
 </p>
              <p>The Pulse solution captures client feedback without effort on your part and transforms it into actionable data that can be used to improve services. Data from Pulse can meet the metrics required by the Federal Government for Medicare without expending any time on the part of the provider. The data dashboard also gives you an easy way to share what your teams are doing with the board or other funders, allowing your organization to make improvements to your service to better help these individuals in the trying times of their lives.

</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link> </div>
              <div className={style.right}>
              <iframe title="Pulse For Good + Valley Behavioral Health" className={style.video} src="https://www.youtube.com/embed/9flVqovH73U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="Valley Kiosk" src={bhuser} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  Having the right people at the table
                  </div>
                  <p>
                 Partnering with the right people can help your organization free up resources and maximize potential.  </p><p>Service providers are already maxed out on resources, time, and people. Using more of those resources to have an internal staff member create a survey, administer that survey, aggregate and analyze that data is often more than providers can do and spare.</p>
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/pulse-for-good/having-the-right-people-at-the-table-8cb9cdc729fb?source=friends_link&sk=2d9cc44aef9892467d313eea1d274460" className={style.learnmore}>Read more</a>
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
      <li>Save staff hours</li>
      <li>Eliminate data entry</li>
      <li>Aggregate responses in real time</li>
      <li>Visualize and filter data</li>
      <li>Monitor trends</li>
    </ul>
  </div>
  <div className={style.feature}>
    <h3>Enhance funding discussions</h3>

    <ul>
      <li>Share client concerns</li>
      <li>Bring real data to discussions</li>
      <li>Track key indicators</li>
      <li>Meet reporting requirements</li>
      <li>Highlight your strengths</li>
    </ul>
  </div>
</div>



            <div className={style.midHeader}>
            Build a culture of listening - Automatically
            </div>
<div className={style.testimonials}>
<div className={style.testSection}>
  <div><img alt="becky" className={style.personPic} src={becky}/></div>
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
  <div><img alt="melissa" className={style.personPic} src={melissa}/></div>
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
  <div><img alt="julie" className={style.personPic} src={julie}/></div>
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
