import React from "react"
import style from "./experts.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Tamera from "../../images/advisors/tamera.jpg";
import Iain from "../../images/advisors/iain.jpg";
import Mark from "../../images/advisors/mark.jpg";

import Michelle from "../../images/advisors/michelle.jpg";

import Kathryn from "../../images/advisors/kathryn.jpg";
import Jamison from "../../images/advisors/jamison.jpg";

import Matt from "../../images/advisors/matt.jpg";

import Amy from "../../images/advisors/amy.jpg";
import { Link } from "gatsby"





const Experts = () => {

  return (
    <div className={style.container}>
    <img src={Matt} className={style.advisor}/>
    <img src={Tamera} className={style.advisor}/>
    <img src={Iain} className={style.advisor}/>
    <img src={Kathryn} className={style.advisor}/>
    <div className={style.headline}>
    <div>Backed by industry experts</div>
    
    <Link className={style.seemore} to="/about">Learn More</Link></div>
    
    <img src={Jamison} className={style.advisor}/>
    <img src={Amy} className={style.advisor}/>
   
    <img src={Michelle} className={style.advisor}/>
    <img src={Mark} className={style.advisor}/>
    </div>
  )
}

export default Experts
