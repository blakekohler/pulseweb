import React from "react"
import style from "./experts.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Tamera from "../../images/tamera.png";
import Iain from "../../images/iain.jpg";
import Mark from "../../images/mark.png";

import Michelle from "../../images/michele.jpg";

import Kathryn from "../../images/kathryn.jpg";
import Jamison from "../../images/jamison.png";

import Matt from "../../images/matt.png";

import Amy from "../../images/amy.jpg";






const Experts = () => {

  return (
    <div className={style.container}>
    <img src={Matt} className={style.matt}/>
    <img src={Tamera} className={style.tamera}/>
    <img src={Iain} className={style.iain}/>
    <img src={Kathryn} className={style.kathryn}/>
    <div className={style.headline}>
    <div>Backed by industry experts</div>
    
    <div className={style.seemore}>Learn More</div></div>
    
    <img src={Jamison} className={style.jamison}/>
    <img src={Amy} className={style.amy}/>
   
    <img src={Michelle} className={style.michelle}/>
    <img src={Mark} className={style.mark}/>
    </div>
  )
}

export default Experts
