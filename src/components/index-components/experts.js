import React from "react"
import * as style from "./experts.module.scss"
import Tamera from "../../images/advisors/tamera-min.jpg";
import Iain from "../../images/advisors/iain-min.jpg";
import Mark from "../../images/advisors/mark-min.jpg";
import Michelle from "../../images/advisors/michelle-min.jpg";
import Kathryn from "../../images/advisors/kathryn-min.jpg";
import Jamison from "../../images/advisors/jamison-min.jpg";
import Matt from "../../images/advisors/matt-min.jpg";
import Amy from "../../images/advisors/amy-min.jpg";
import { Link } from "gatsby"

const Experts = () => {
  return (
    <div className={style.container}>
    <img alt="Matt" src={Matt} className={style.advisor}/>
    <img alt="Tamera" src={Tamera} className={style.advisor}/>
    <img alt="Iain" src={Iain} className={style.advisor}/>
    <img alt="Kathryn" src={Kathryn} className={style.advisor}/>
    <div className={style.headline}>
    <div>Backed by industry experts</div>
    
    <Link className={style.seemore} to="/about">Learn More</Link></div>
    
    <img alt="Jamison" src={Jamison} className={style.advisor}/>
    <img alt="Amy" src={Amy} className={style.advisor}/>
   
    <img alt="Michelle" src={Michelle} className={style.advisor}/>
    <img alt="Mark" src={Mark} className={style.advisor}/>
    </div>
  )
}

export default Experts
