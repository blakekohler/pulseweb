import React from "react"
import style from "./highered.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
import mitchell from "../images/mitchell.jpg"
import school from "../images/school.jpeg"
import valleykiosk from "../images/valleykiosk.png"
import julie from "../images/julie.jpg"
import melissa from "../images/melissa.jpg"

import blake from "../images/blake.jpg"
const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse for Higher Education" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <p className={style.header}>Get feedback from vulnerable students - Automatically</p>
            
            <div className={style.mainEvent}>
              <div className={style.left}>
              <div className={style.subheader}>
           Provide a safe space for students to share how they really feel
            </div>
              <p>
              Some of the world's most vulnerable individuals are students. Students are dealing with anxiety, depression, drug abuse, food or housing insecurity on top of homework, and the other challenges that come with being a student at and institution of higher education. 

                  </p>
                  <p>
                  Students receive hundreds of emails every day, including numerous emails from your university asking for feedback, that remain unopened. Vulnerable students are reluctant to provide feedback via email with their lack of anonymity. Getting an honest answer in this situation is nearly impossible. </p>
              <p>For those students to share how they feel, they need the psychological safety that comes with being anonymous. Pulse feedback kiosks allow for a convenient way for students to provide feedback while protecting their identity.</p>
              <Link className={style.demo} to="/demo">Schedule Demo</Link></div>
              <div className={style.right}>
             <img src={valleykiosk} className={style.schoolPic}/>
              </div>
            

              

             
            </div>
            <div className={style.secondaryContent}>

            <div className={style.row}>
                <div className={style.rowImage}>
                  <img src={school} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                  What happens when you are afraid to give your honest opinion?
                  </div>
                  <p>
                  What happens when you are afraid to give your honest opinion?
The fear that is introduced creates a new class of people. Empowered individuals become vulnerable individuals. Empowered individuals give feedback that is honest, actionable and often negative. </p><p>Vulnerable individuals share feedback that is often calculated, reserved and often overly positive. When you fear retribution for your feedback the quality of the feedback drops dramatically. </p>
                  <a target="_blank" href="https://medium.com/pulse-for-good/the-vulnerability-gap-8d9058664b73?source=friends_link&sk=fbe7122c0e4c758c20ffd4bbc6af8493" className={style.learnmore}>Read more</a>
                </div>
              </div>

<div className={style.featuresList}>
  <div className={style.feature}>
    <h3>Increase student engagement</h3>

    <ul>
      <li>Engage student on their terms</li>
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
    <h3>Improve decision making</h3>

    <ul>
      <li>Share student concerns</li>
      <li>Use reports in discussions</li>
      <li>Track key indicators</li>
      <li>Meet reporting requirements</li>
    </ul>
  </div>
</div>



            <div className={style.midHeader}>
            Make listening your universities super power
            </div>
<div className={style.testimonials}>
<div className={style.testSection}>
  <div><img className={style.personPic} src={mitchell}/></div>
  <div>
  <div className={style.personName}>Mitchell Colver</div>
<div className={style.personTitle}>Founding Manager of the Center for Student Analytics - Utah State University</div>
<div className={style.quote}>
  "Vulnerable populations do not respond to email, even in universities. Our email open rates at USU for emails sent to a general population hover around 55%. Those 45% who don’t open emails tend to be the students we are most concerned about, who are most vulnerable academically or who are most in distress. That distress is reflected in our data. So, an onsite kiosk is going to provide one more point of contact for authentic feedback."
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
