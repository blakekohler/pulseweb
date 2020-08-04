import React from "react"
import style from "./usecase.module.scss"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Container from "../../components/contentContainer"

import brit from "../../images/brit-square.jpg"
import team1 from "../../images/team1.jpeg"
import team2 from "../../images/team2.jpeg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"

const Volunteer = () => {
  return (
    <Layout>
      <SEO title="Automated employee feedback gathering" description="Pulse for Good helps you get feedback from your vulnerable employees" img={team2} />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Collect feedback from your employees - automatically.  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
            Gain immediate insight into your employee satisfaction 
            </div>
              <p>
          
              Gathering staff feedback is hard in the best of situations. Knowing how your staff members feel can be the difference between retaining staff and losing top performers. Today's challenges amplify the need for a safe way for your team to share how they feel. 
 </p>
                  <p>
                  Having focused our entire solution on gathering feedback from groups who are reluctant to share feedback, we understand the complexity of collecting input from teams with diverse needs.
 </p>
              <p>The Pulse solution captures staff feedback without effort on your part. It transforms feedback into actionable data to improve the volunteer experience. The data dashboard also gives you an easy way to share what your teams are doing with the board or other stakeholders, allowing your organization to improve your service and provide better experiences for both your staff and clients.   

</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link> </div>
              <div className={style.right}>
              <img src={team2} className={style.schoolPic} alt="Team mates eating food"/>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="Teammates happy" src={team1} />
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
    <h3>Increase employee engagement</h3>

    <ul>
      <li>Engage employees on their terms</li>
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
      <li>Share employee concerns</li>
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
export default Volunteer
