import React from "react"
import style from "./help.module.scss"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import logo from "../images/pulselogo-white.png";
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


const Help = () => {
  // const posts = props.data.allContentfulBlog.nodes;
  // const { currentPage, numPages } = props.pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  // const nextPage = (currentPage + 1).toString()

  return (
<main>
<SEO title="Help is on the way!"  description="Let's get you out of here before you break something else!"/>
  <section className={style.hero_banner}>
<div className={style.header}>
<span className={style.headerLeft}>
<Link  to="/"> <img className={style.logo} alt="Pulse Logo" src={logo}/></Link>  <div className={style.helpLinkHolder}>
<Link to="/help" className={style.helplink}>Help Center</Link></div>
</span> 
<Link to="/supportrequest" className={style.supportRequest}>Request Help</Link>
</div>
<div className={style.helphero}> 
<div className={style.helpCenter}>
<h1 className={style.h1}>Hi. How can we help?</h1>
  <input className={style.helpSearch} placeholder="Find anything (e.g. filters, emails, or reset password)" />
  <div className={style.searchText}>
    <span className={style.bold}>Common troubleshooting topics:</span>  <a>notifications</a>, <a>offline kiosks</a>, <a>cats</a>
  </div>
</div>
 
</div>
  </section>
<section className={style.helpTopics}>
<div className={style.topicsHolder}>
<div className={style.topicRow}>
  <div className={style.topLeft}>
    <div><img src={started}/></div>
    <h2>Getting Started</h2>
    <div>Details about this help topic</div>
  </div>
  <div className={style.topMiddle}>
  <div><img src={kiosks}/></div>
    <h2>Kiosks</h2>
    <div>Details about this help topic</div>
  </div>
  <div className={style.topRight}>
  <div><img src={surveys}/></div>
    <h2>Surveys</h2>
    <div>Details about this help topic</div>
  </div>
</div>
<div className={style.topicRow}>
<div className={style.bottomLeft}>
<div><img src={dashboard} /></div>
    <h2>Dashboard</h2>
    <div>Details about this help topic</div>
</div>
  <div className={style.bottomMiddle}>
  <div><img src={accounts}/></div>
    <h2>Accounts </h2>
    <div>Details about this help topic</div>
  </div>
  <div className={style.bottomRight}>
  <div><img src={billing}/></div>
    <h2>Billing</h2>
    <div>Details about this help topic</div>
  </div>
</div>

</div>
</section>


<section className={style.featuredArticles}>
  <div className={style.featuredContainer}>
  <h3>Featured Articles</h3>
  <div className={style.listHolder}>
    <ul className={style.articleList}>
      <li><Link to="/">Send and read messages</Link></li>
      <li>Set your Slack status and availability</li>
      <li>View all your unread messages</li>
      <li>Printing Reports</li>
      <li>What is a channel?</li>
    </ul>
  </div>
  </div>
</section>
<SkinnyFooter></SkinnyFooter>
</main>
  )
}
export default Help


