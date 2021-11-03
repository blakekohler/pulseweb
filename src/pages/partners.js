import React from "react"
import { Link } from "gatsby"
import * as style from "./partners.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import partner from "../images/partner.jpeg"
import citygate from "../images/cg.png"
import mt from "../images/mt.jpeg"
import bitfocus from "../images/bitfocus.png"
import gd from "../images/gd.png"
import mhca from "../images/mhca.png"



const Partners = () => (
  <Layout>
    <SEO title="Our Partners" description="Pulse For Good partners with organizations that help service providers and communities deliver quality services to vulnerable individuals" />
    <Container> 
<div className={style.partnersContainer}>
<div className={style.partnersFlex}>
  <div className={style.left}>
  <h1 className={style.helpingHeader}>Partnering for Good</h1>

We partner with various organizations around the country that help service providers and communities deliver quality services to vulnerable individuals. Checkout some of our partners below or click the link below to contact us about partnering!
<Link className={style.learnmore} to="/contact">Partner With Us!</Link>

</div>
  <div className={style.right}>
  <img className={style.picture} alt='high fives!' src={partner}/></div>
</div>

<div className={style.partnersListHolder}>
  <h1 className={style.partnersListHeader}>Our Partners</h1>
  <div className={style.partnersList}>
<div className={style.partnersItem}>
  <img className={style.partnersImage} alt='CityGate Network' src={citygate}/>
</div>
<div className={style.partnersItem}>
  <img className={style.partnersImage} alt='Bitfocus' src={bitfocus}/>
</div>
<div className={style.partnersItem}>
  <img className={style.partnersImage} alt='MHCA' src={mhca}/>
</div>
<div className={style.partnersItem}>
  <img className={style.partnersImage} alt='MissionTracker' src={mt}/>
</div>
<div className={style.partnersItem}>
  <img className={style.partnersImage} alt='Gaither Dynamic' src={gd}/>
</div>
    </div>
    </div>

</div>



    </Container>
  </Layout>
)

export default Partners
