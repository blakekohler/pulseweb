import React, {useState} from "react"
import { Link } from "gatsby"
import style from "./pricing.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"

const Pricing = () => {

  const [monthly, setShowMonthly] = useState(true);
  return (
  <Layout>
    <SEO title="Pricing" description="Transparent pricing for the Pulse For Good feedback system" />
    <Container> 
      <div className={style.pricingflex}>
      <div className={style.leftHolder}>
      <h1 className={style.subHeader}>Price per kiosk</h1>
      <div className={style.radios}
      >
       <label className={style.container} onChange={e => setShowMonthly(true)}>Monthly
  <input type="radio" defaultChecked name="radio"/>
  <span className={style.checkmark}></span>
</label>
<label className={style.container} onChange={e => setShowMonthly(false)}>Yearly
  <input type="radio"  name="radio"/>
  <span className={style.checkmark}></span>
</label>
      </div>
     {
       monthly ? <div>
       <div className={style.priceLevel}>
           <div className={style.priceDetails}>1 - 2 Kiosks <span className={style.green}>$500 </span>Per Kiosk</div>
           <div className={style.setupfee}>$500 one time setup</div>
           </div>
           <div className={style.priceLevel}>
           <div className={style.priceDetails}>3 - 19 Kiosks <span className={style.green}>$350 </span>Per Kiosk</div>
           <div className={style.setupfee}>$500 one time setup</div>
           </div>
           <div className={style.priceLevel}>
           <div className={style.priceDetails}>20+ Kiosks <span className={style.green}>$250 </span>Per Kiosk</div>
           <div className={style.setupfee}>$500 one time setup</div>
           </div>
       </div> : <div>
<div className={style.priceLevel}>
    <div className={style.priceDetails}>1 - 2 Kiosks <span className={style.green}>$6000 </span>Per Kiosk</div>
    <div className={style.setupfeegreen}>$0 setup fee</div>
    </div>
    <div className={style.priceLevel}>
    <div className={style.priceDetails}>3 - 19 Kiosks <span className={style.green}>$4200 </span>Per Kiosk</div>
    <div className={style.setupfeegreen}>$0 setup fee</div>
    </div>
    <div className={style.priceLevel}>
    <div className={style.priceDetails}>20+ Kiosks <span className={style.green}>$3000 </span>Per Kiosk</div>
    <div className={style.setupfeegreen}>$0 setup fee</div>
    </div>
</div>
     }
<Link className={style.demo} to="/contact">Request a Quote</Link>
    
      </div>
      <div className={style.rightHolder}>
      <h1 className={style.subHeader}>With every kiosk</h1>
      <div className={style.valueAdd}>Data that's easy to understand and share</div>
      <div className={style.valueAdd}>Hardware guarantee and replacement</div>
      <div className={style.valueAdd}>4g data and Wi-Fi for max up time </div>
      <div className={style.valueAdd}>Email support </div>
      <div className={style.valueAdd}>Weekly email reports </div>
      <div className={style.valueAdd}>Mobile access </div>
      <div className={style.valueAdd}>URL for unlimited non kiosk surveys </div>
      <div className={style.valueAdd}>Custom survey and consulting </div>
      </div>
      </div>
    </Container>
  </Layout>
  )
}

export default Pricing
