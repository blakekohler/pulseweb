import React from "react"
import * as style from "./usecase.module.scss"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Container from "../../components/contentContainer"

import brit from "../../images/brit-square.jpg"
import faith from "../../images/faith.jpeg"
import tenant from "../../images/tenant.jpeg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"

const RescueMission = () => {
  return (
    <Layout>
      <SEO title="Automated feedback gathering for rescue missions" description="Pulse for Good helps you get feedback for your rescue mission" img={faith} />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Feedback collection for Rescue Missions  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
            Gain immediate insight into your guest, staff and volunteer satisfaction 
            </div>
              <p>
              Understanding how your clients, staff, and volunteers feel is hard to accomplish in the best of situations. Today's challenges amplify the need for an easy way to understand and share the challenges people face inside your mission. 
              
                </p>
                  <p>
                  Having focused our entire solution on gathering feedback from groups who are reluctant to share feedback, we understand the complexity of collecting input from organizations with diverse needs.
 </p>
 <p>The Pulse solution captures feedback without effort on your part. It transforms feedback into actionable data to improve the experiences of those who interact with your organization. 
</p>
<p>
The data dashboard also gives you an easy way to share what your teams are doing with the board or other stakeholders, allowing your organization to improve your service, fulfill your mission, and provide better experiences.
</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link> </div>
              <div className={style.right}>
              <img src={faith} className={style.schoolPic} alt="Faith"/>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="For rent sign" src={tenant} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  What happens when you are afraid to give your honest opinion?
                  </div>
                  <p>
                  What happens when you are afraid to give your honest opinion?
The fear that is introduced creates a new class of people. Empowered individuals become vulnerable individuals. Empowered individuals give feedback that is honest, actionable and often negative. </p><p>Vulnerable individuals share feedback that is often calculated, reserved and often overly positive. When you fear retribution for your feedback the quality of the feedback drops dramatically. </p>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.pulseforgood.com/blogpost/the-vulnerability-gap" className={style.learnmore}>Read more</a>
                </div>
              </div>

<div className={style.featuresList}>
  <div className={style.feature}>
    <h3>Increase engagement</h3>

    <ul>
      <li>Engage individuals on their terms</li>
      <li>Receive as many as 3 - 5 Submissions daily</li>
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
      <li>Share concerns</li>
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
  <div><img alt="becky" className={style.personPic} src={brit}/></div>
  <div>
  <div className={style.personName}>Brittany Moulton </div>
<div className={style.personTitle}>Engagement Coordinator</div>
<div className={style.quote}>
  "..allows us to really make the changes to make sure that people have a positive experience.."
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
export default RescueMission
