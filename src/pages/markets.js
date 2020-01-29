import React from "react"
import { Link } from "gatsby"
import style from "./markets.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import chair from "../images/feedbackFromWheelChair.jpg"
import homeless from "../images/Homeless.jpg"
import bh from "../images/bh.jpg"
import ch from "../images/ch.jpg"
import healthcare from "../images/healthcare.jpg"
import corrections from "../images/corrections.jpg"
import rehab from "../images/rehab.jpg"
import housing from "../images/housing.jpg"
import dv from "../images/Domestic.jpg"
import mh from "../images/mh.jpg"



const Markets = () => (
  <Layout>
    <SEO title="Markets" />
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
  <img className={style.picture} src={chair}/></div>
</div>
<div className={style.marketListHolder}>
  <h1 className={style.helpingHeader}>Markets we serve</h1>
  <div className={style.marketList}>
  <Link className={style.marketItem}>
  <img className={style.marketImage} src={homeless}/>
  <div className={style.marketTitle}> Homelessness
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={bh}/>
  <div className={style.marketTitle}> Behavioral health
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={ch}/>
  <div className={style.marketTitle}> Community health
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={healthcare}/>
  <div className={style.marketTitle}> Health care
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={corrections}/>
  <div className={style.marketTitle}> Corrections
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={rehab}/>
  <div className={style.marketTitle}> Rehab
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={housing}/>
  <div className={style.marketTitle}> Affordable housing
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={dv}/>
  <div className={style.marketTitle}> Domestic Violence
    </div>
    </Link>

    <Link className={style.marketItem}>
  <img className={style.marketImage} src={mh}/>
  <div className={style.marketTitle}> Mental health
    </div>
    </Link>

    
  </div>
</div>

</div>



    </Container>
  </Layout>
)

export default Markets
