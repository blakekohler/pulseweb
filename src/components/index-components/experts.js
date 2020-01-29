import React from "react"
import style from "./experts.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Tamera from "../../images/tamera-small.jpg";
import Iain from "../../images/iain-small.jpg";
import Mark from "../../images/mark-small.jpg";

import Michelle from "../../images/michele-small.jpg";

import Kathryn from "../../images/kathryn-small.jpg";
import Jamison from "../../images/jamison-small.jpg";

import Matt from "../../images/mattt-small.jpg";

import Amy from "../../images/amy.jpg";
import { Link } from "gatsby"





const Experts = () => {

  return (
    <div className={style.container}>
    <img src={Matt} className={style.matt}/>
    <img src={Tamera} className={style.tamera}/>
    <img src={Iain} className={style.iain}/>
    <img src={Kathryn} className={style.kathryn}/>
    <div className={style.headline}>
    <div>Backed by industry experts</div>
    
    <Link className={style.seemore} to="/about">Learn More</Link></div>
    
    <img src={Jamison} className={style.jamison}/>
    <img src={Amy} className={style.amy}/>
   
    <img src={Michelle} className={style.michelle}/>
    <img src={Mark} className={style.mark}/>
    </div>
  )
}

export default Experts
