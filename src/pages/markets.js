import React from "react"
import { Link } from "gatsby"
import style from "./markets.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import chair from "../images/markets/feedback.jpg"
import homeless from "../images/markets/homeless.jpg"
import bh from "../images/markets/bh.jpg"
import ch from "../images/markets/ch.jpg"
import healthcare from "../images/markets/hc.jpg"
import corrections from "../images/markets/correction.jpg"
import rehab from "../images/markets/rehab.jpg"
import housing from "../images/markets/ah.jpg"
import dv from "../images/markets/dv.jpg"
import mh from "../images/markets/mh.jpg"
import ed from "../images/markets/ed.jpg"



const Markets = () => (
  <Layout>
    <SEO title="Markets" description="Pulse For Good helps in many different industries - all of which serve vulernable individuals" />
    <Container> 
<div className={style.marketContainer}>
<div className={style.marketFlex}>
  <div className={style.left}>
  <h1 className={style.helpingHeader}>Helping provide a voice
to vulnerable people</h1>

Weather you serve the homeless or people seeking refuge from domestic violence we help you to collect your clients feedback so you can stay focused on what you do best.
<Link className={style.learnmore} to="/about">Learn more about our mission</Link>

</div>
  <div className={style.right}>
  <img className={style.picture} alt='person in chair' src={chair}/></div>
</div>
<div className={style.marketListHolder}>
  <h1 className={style.helpingHeader}>Markets we serve</h1>
  <div className={style.marketList}>
  <div className={style.marketItem}>
      <Link className={style.link} to="homeless">
  <img className={style.marketImage} alt='homeless' src={homeless}/>
  <div className={style.marketTitle}> Homelessness
    </div>
    </Link>
    </div>
    <div className={style.marketItem}>
      <Link className={style.link} to="behavioral">
  <img className={style.marketImage} alt='behavioral' src={bh}/>
  <div className={style.marketTitle}> Behavioral health
    </div>
    </Link>
    </div>

    <div className={style.marketItem}>
      <Link className={style.link} to="highered">
  <img className={style.marketImage} alt='Education' src={ed}/>
  <div className={style.marketTitle}> Education
    </div>
    </Link>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Community health' src={ch}/>
  <div className={style.marketTitle}> Community health
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Healthcare' src={healthcare}/>
  <div className={style.marketTitle}> Health care
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Corrections' src={corrections}/>
  <div className={style.marketTitle}> Corrections
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Rehab' src={rehab}/>
  <div className={style.marketTitle}> Rehab
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Affordable housing' src={housing}/>
  <div className={style.marketTitle}> Affordable housing
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Domestic Violence' src={dv}/>
  <div className={style.marketTitle}> Domestic Violence
    </div>
    </div>

    <div className={style.marketItem}>
  <img className={style.marketImage} alt='Mental health' src={mh}/>
  <div className={style.marketTitle}> Mental health
    </div>
    </div>

    
  </div>
</div>

</div>



    </Container>
  </Layout>
)

export default Markets
