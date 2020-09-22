import React from "react"
import style from "./helpcategory.module.scss"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import logo from "../images/logo.png";
import started from "../images/help/start.png"
import kiosks from "../images/help/kiosks.png"
import surveys from "../images/help/surveys.png"
import dashboard from "../images/help/dashboard.png"
import accounts from "../images/help/accounts.png"
import billing from "../images/help/billing.png"


import SEO from "../components/seo"
import Container from "../components/contentContainer"
import writingforgood from "../images/writingforgood.png"
import SkinnyFooter from "../components/skinnyfooter"


const HelpCategory = () => {
  // const posts = props.data.allContentfulBlog.nodes;
  // const { currentPage, numPages } = props.pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  // const nextPage = (currentPage + 1).toString()

  return (
<main>
<SEO title="Help is on the way!"  description="Let's get you out of here before you break something else!"/>
 <seciton>
 <div className={style.header}>
<span className={style.headerLeft}>
<Link  to="/"> <img className={style.logo} alt="Pulse Logo" src={logo}/></Link>  <div className={style.helpLinkHolder}>
<Link to="/help" className={style.helplink}>Help Center</Link></div>
</span> 
<Link to="/supportrequest" className={style.supportRequest}>Request Help</Link>
</div>
 </seciton>
  <section className={style.hero_banner}>
<h1>Getting Started</h1>
<div className={style.sectionDescription}>How to get started using Pulse For Good</div>
<div className={style.helpNav}>
  <ul>
    <li className={style.active} > <Link className={style.categoryLink} to="/helpcategory">Getting Started</Link></li>
    <li > <Link className={style.categoryLink} to="/helpcategory">Kiosks</Link></li>
    <li><Link className={style.categoryLink} to="/helpcategory">Surveys</Link></li>
    <li><Link className={style.categoryLink} to="/helpcategory">Dashboard</Link></li>
    <li ><Link className={style.categoryLink} to="/helpcategory">Accounts</Link></li>
    <li><Link className={style.categoryLink} to="/helpcategory">Billing</Link></li>
  </ul>
</div>
  </section>
<section className={style.articlebody}>
  <div className={style.subCategory}>
    <h1>Setting Up a Kiosk</h1>
    <p>Test this out how does this work</p>
  </div>
</section>



<SkinnyFooter></SkinnyFooter>
</main>
  )
}
export default HelpCategory


