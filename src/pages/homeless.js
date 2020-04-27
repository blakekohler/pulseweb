import React from "react"
import style from "./homeless.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
import matt from "../images/mattm-square.png"
import wheelchair from "../images/wheelchair.png"
import julie from "../images/julie.jpg"
import melissa from "../images/melissa.jpg"

import blake from "../images/blake.jpg"
const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse for Homeless Service Providers" description="Gather feedback from individuals experiencing homelessness in a way that helps them feel safe to share how they really feel." />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Automated feedback for Homeless Service providers  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
              Get the feedback you need to improve outcomes
            </div> 
              <p>When you talk to someone who is experiencing homelessness, a pattern emerges:  People pass them by, avoid eye contact, cross the street not to have to walk by them and do anything they can to avoid thinking about their plight. They are invisible.</p> 
              <p>Sadly, individuals experiencing homelessness often convey that they experience the same thing when visiting service providers that are attempting to serve them. They can feel disregarded, neglected, and overly scrutinized. </p>
              <p>Service providers have learned that engaging, involving, and listening to these individuals breaks the pattern of dehumanization. </p>
              <p>Client feedback kiosks are an excellent way for individuals to feel valued and heard. They bring the needs of an individual into focus with striking clarity. They foster a culture of listening and build provider/client trust. </p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link>
              </div>
              <div className={style.right}>
              <iframe className={style.video} src="https://www.youtube.com/embed/OO6dIughacg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img src={wheelchair} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  Things Change When Providers Gather Feedback From Homeless People They Serve
                  </div>
                  <p>Getting customer feedback is so axiomatic that we scarcely have any interactions with a business without being invited to take a survey. Even after using the bathroom! Who hasn’t seen an instant satisfaction survey in a restroom position for you to choose one of three faces matching your satisfaction with the experience?</p>
                  <p>
                  In the homeless services arena, feedback isn’t always sought. When it is, it often is done by the staff. How honest is the feedback about the services likely to be when the service provider conducts the survey, watching as you answer questions on a written form?
                </p>
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
  <div><img className={style.personPic} src={matt}/></div>
  <div>
  <div className={style.personName}>Matt Melville</div>
<div className={style.personTitle}>Director of Homeless Services</div>
<div className={style.quote}>
  "Getting daily responses from our guest using services gives us a snapshot into their lives."
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
