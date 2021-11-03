import React from "react"
import * as style from "./covid.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"
import heroes from "../images/heroes-small.jpg"

import SEO from "../components/seo"
import Container from "../components/contentContainer"

import kioskuser from "../images/kiosk-user.jpg"
import rhbuild from "../images/roadhomelbuilding.jpg"

import cleankiosk from "../images/cleankiosk.jpg"


const Webinars = () => {
  return (
    <Layout>
      <SEO title="Pulse For Good | 15 Minutes Webinar Series" description="Pulse For Good's monthly 15 minutes webinar series" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <div className={style.header}>15 minutes on feedback</div>
            <div className={style.subheader}>
              Join us monthly as we discuss tips and tricks to get better feedback
            </div>
            <div className={style.mainEvent}>
            <p>
            Building a successful feedback system can be a complicated process. We help organizations around the country gather feedback from the world's most vulnerable individuals, and we're sharing the lessons we learn each month in a quick 15-minute webinar.            </p>
                  <p>
                  Join us next month, or check out our past webinars to learn the latest and greatest in gathering feedback.                  </p>

              {/* <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="Kiosk user" src={kioskuser} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                    COVID-19 Screening Tool
                  </div>
                  <p>
                  Learn about how you can use a Pulse kiosk to allow individuals to run a simple self service health diagnostic test. Based on the test developed in partnership with Apple, the CDC and the Whitehouse use a customized survey to help your clients know when and how they should seek care.                </p>
                  <Link to="/covidscreen" className={style.learnmore}>Learn more</Link>
                </div>
              </div>

              <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="Roadhome building" src={rhbuild} />
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                   Using feedback surveys to improve crisis response
                  </div>
                  <p>
                    Learn about how one of our partners in Utah is using feedback to improve it's response to the COVID-19 crisis. Find ways to improve your organizations response and involve your cilents in knowing what and how to clean and prevent virus spread.
                  </p>
                  <a href="https://www.youtube.com/watch?v=vcrMfQ02g0c" className={style.learnmore}>Learn more</a>
                </div>
              </div>

              <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="clean kiosk" src={cleankiosk} /> 
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                    Keeping your kiosks clean and safe to use
                  </div>
                  <p>
                    Worried about keeping your kiosk safe to use? We understand. Learn about how we suggest you sanitize your kiosk and keep it safe for your clients. 
                  </p>
                  <a href="https://medium.com/pulse-for-good/sanitizing-a-pulse-kiosk-e5e507565876?source=friends_link&sk=d05bfc6759e50fc99d911236dd81338e" className={style.learnmore}>Learn more</a>
                </div>
              </div>

              <div className={style.row}>
                <div className={style.rowImage}>
                  <img alt="heroes are orinary people who take extraordinary actions" src={heroes} /> 
                </div>
                <div className={style.rowDetails}>
                  <div className={style.rowHeader}>
                    Help us award your heroes
                  </div>
                  <p>
                  Help us find and reward examples of extraordinary efforts to help those experiencing crisis. 
                  </p>
                  <Link to="/heroes" className={style.learnmore}>Learn more</Link>
                </div>
              </div> */}
<iframe width="100%" height="200" frameborder="0" src="https://app.livestorm.co/pulse-for-good/upcoming?limit=3" title="Pulse For Good events | Livestorm"></iframe>
<iframe width="100%" height="1000" frameborder="0" src="https://app.livestorm.co/pulse-for-good/on_demand" title="Pulse For Good events | Livestorm"></iframe>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Webinars
