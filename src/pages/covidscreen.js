import React from "react"
import style from "./covidscreen.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
import screener from "../images/covidscreening.jpg"
import blake from "../images/blake.jpg"
const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse Heroes" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
            <div className={style.heroImg}>
              <img src={screener} />
            </div>

            <div className={style.header}>
              Help vulnerable individuals self screen 
            </div>
            <div className={style.subheader}>
             Use a Pulse kiosk for giving feedback about potential COVID-19 symptoms
            </div>
            <div className={style.mainEvent}>
              <p>
              Sometimes the most important feedback isn't the feedback you give but the feedback you receive. Right now for vulnerable individuals around the world getting some information on the symptoms they may be having in a way that doesn't violate their privacy or put them at risk can be some of the most transformational feedback they can receive.
</p><p>
In these extraordinary times we're taking steps outside of our normal operations to help support the facilitation of this feedback back to vulnerable individuals everywhere. Using our kiosks we've implemented a simple screening solution, based on&nbsp;<a href="https://www.apple.com/covid19/">Apple's COVID-19 screener </a>that was developed in partnership with the CDC and Whitehouse. Our questions as well as responses have been somewhat modified to fit the needs of vulnerable individuals and the information that we supply to these individuals will be tailored to match the needs and resources available to our partners. 
</p><p>
Once the need for COVID-19 screening has passed, or even during the crisis, our kiosks will be able to operate with their traditional feedback gathering functionality.              </p>


<div className={style.buttonHolder}>
<a className={style.viewmore} href="http://kiosk.pulseforgood.com/survey/covid">View example</a>
<Link className={style.learnmore}  to="/demo">Learn more</Link>
</div>




            </div>
          </div>
         
        </div>
      </Container>
    </Layout>
  )
}
export default Example
