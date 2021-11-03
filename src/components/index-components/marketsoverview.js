import React from "react"
import style from "./marketsoverview.module.scss"


import { Link } from "gatsby"





const MarketsOverview = () => {

  return (
    <div className={style.container}>
   <h1>Markets & Solutions</h1>
   <div className={style.vulnerablelist}>
   <div className={style.item}>
   <i className={`fas fa-bed ${style.big}`}></i>
   <div className={style.name}>Homelessness</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-heart ${style.big}`}></i>
   <div className={style.name}>Behavioral Health</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-user-md ${style.big}`}></i>
   <div className={style.name}>Community Health</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-hospital ${style.big}`}></i>
   <div className={style.name}>Healthcare</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-home ${style.big}`}></i>
   <div className={style.name}>Refugee</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-users ${style.big}`}></i>
   <div className={style.name}>Domestic Violence</div>
   </div>
   <div className={style.item}>
   <i className={`fas fa-gavel ${style.big}`}></i>
   <div className={style.name}>Corrections</div>
   </div>
   <div className={style.item}>

   <i className={`fas fa-pencil-alt ${style.big}`}></i>
  
   <div className={style.name}>Education</div>
   </div>


   </div>
   <div className={style.buttonHolder}>
   <Link to="/markets/" className={style.seemore}>
   View More Markets & Solutions
    </Link>
   </div>
   
    </div>
  )
}

export default MarketsOverview
