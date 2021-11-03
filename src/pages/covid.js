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


const Example = () => {
  return (
    <Layout>
      <SEO title="Tackling COVID-19 with Pulse" description="Pulse For Good helps organizations improve their COVID-19 response." />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          <br></br>
            <div className={style.header}>Feedback in times of crisis</div>
            <div className={style.subheader}>
              Use kiosks to improve your response to the COVID-19 crisis
            </div>
            <div className={style.mainEvent}>
            <p>
            During the COVID-19 crisis Pulse For Good is committed to helping our partners supply the best service possible for the individuals that they serve. There are opportunities for growth for organizations and individuals as we respond to COVID-19 and gathering feedback accelerates the rate of improvement at a time when services desperately need to be improved. 
                  </p>
                  <p>
                  Below we have listed the ways we are responding to the crisis. Check back often for more ways to utilize the Pulse system to improve the way you communicate and learn from vulnerable individuals. 
                  </p>

              <div className={style.row}>
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
              </div>

             
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Example
