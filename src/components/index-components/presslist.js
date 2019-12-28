import React from "react"
import style from "./presslist.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Forbes from "../../images/forbes.png";
import Tribune from "../../images/tribune.png";
import OrgCode from "../../images/orgcode.png";
import CityWeekly from "../../images/cityweekly.png";


const PressList = () => {

  return (
    <div className={style.container}>

    
    <div className={style.imgHolder}>
    <img className={style.forbespic} src={Forbes}/>
    <div className={style.quote}>
    "How honest is the feedback about the services likely to be when the service provider conducts the survey, watching as you answer questions on a written form?"<div className={style.author}>Devin Thorpe - Forbes</div>
    </div>
    <div className={style.seemore}>
        See more Press
    </div>
    {/* <img className={style.tribune} src={Tribune}/>
    <img className={style.orgcode} src={OrgCode}/>
    <img className={style.cityweekly} src={CityWeekly}/> */}
    </div>
    
    </div>
  )
}

export default PressList
