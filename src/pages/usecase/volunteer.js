import React from "react"
import style from "./usecase.module.scss"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Container from "../../components/contentContainer"

import brit from "../../images/brit-square.jpg"
import volunteer from "../../images/volunteer.jpeg"
import bhuser from "../../images/bhuser.jpg"
import julie from "../../images/julie.jpg"
import melissa from "../../images/melissa.jpg"

const Volunteer = () => {
  return (
    <Layout>
      <SEO title="Automated volunteer feedback gathering" description="Pulse for Good helps you get feedback from your volunteers" img={volunteer} />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Collect feedback from volunteers - automatically.  </p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
            Gain immediate insight into your volunteers satisfaction 
            </div>
              <p>
          
              Gathering volunteer feedback is hard in the best of situations. Knowing how your volunteers are feeling can be the difference between volunteers returning (and giving) and those who never return. Today's challenges amplify the need for a safe way for volunteers to share how they feel without the embarrassment that comes with critiquing your processes.                   </p>
                  <p>
                  Having focused our entire solution on gathering feedback from groups who are reluctant to share feedback, we understand the complexity of collecting feedback from this diverse group.
 </p>
              <p>The Pulse solution captures volunteer feedback without effort on your part. It transforms feedback into actionable data to improve the volunteer experience. The data dashboard also gives you an easy way to share what your teams are doing with the board or other funders, allowing your organization to improve your service and provide better experiences for both clients and volunteers. 

</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link> </div>
              <div className={style.right}>
              <iframe title="Volunteer Feedback with Pulse For Good " className={style.video} src="https://www.youtube.com/embed/XOcA105e7GE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="Volunteer" src={volunteer} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  Beyond their means
                  </div>
                  <p>
                  How one organization understood the value of volunteers and invested in them.  </p><p>For many service providers — funding tight, resources stretched, and staff pushed — volunteers are the lifeline of their organization. They allow these organizations to go beyond their means and try new and innovative approaches while making sure that current needs are met.</p>
                  <a target="_blank" rel="noopener noreferrer" href="http://localhost:8000/blogpost/beyond-their-means" className={style.learnmore}>Read more</a>
                </div>
              </div>

<div className={style.featuresList}>
  <div className={style.feature}>
    <h3>Increase volunteer engagement</h3>

    <ul>
      <li>Engage volunteer on their terms</li>
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
      <li>Share volunteer concerns</li>
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
