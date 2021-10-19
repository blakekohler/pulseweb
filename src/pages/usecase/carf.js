import React from "react"
import * as style from "./usecase.module.scss"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Container from "../../components/contentContainer"

import brit from "../../images/brit-square.jpg"
import carf from "../../images/carf.png"
import tenant from "../../images/tenant.jpeg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"

const Carf = () => {
  return (
    <Layout>
      <SEO title="Automated your client input for CARF" description="Pulse for Good helps automates your CARF client input process" img={carf} />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>How does Pulse For Good support CARF Accreditation</p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
              Automated your client input process, so it meets CARF requirements
            </div>
              <p>
              Becoming CARF accredited is not for the faint of heart. While it might seem like the laundry list of steps you need to take to get your CARF accreditation is a mile long, at least one of those steps has an easy button - feedback kiosks! 
              
                </p>
                  <p>
                  CARF accreditation requires a consistent client feedback process that shows how your organization's client input is captured and utilized. Using self-service kiosks and auto-generating reports, the Pulse For Good system handles the time-consuming parts. All that is left for you is implementing a meeting to review the information and produce action items.
 </p>
 <p>Once you've got your scheduled meetings running, a few action items under your belt, and your feedback system in place, you'll be ready to cross off a portion of your CARF To-do list. Not bad for a day's work. 
</p>
<p>
Once you've got your scheduled meetings running, a few action items under your belt, and your feedback system in place, you'll be ready to cross off a portion of your CARF To-do list. Not bad for a day's work.
</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link> </div>
              <div className={style.right}>
              <img src={carf} className={style.schoolPic} alt="CARF + Pulse For Good"/>
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
export default Carf
