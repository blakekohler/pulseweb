import React from "react"
import style from "./helparticle.module.scss"
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


const HelpArticle = () => {
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
  <h1>How do I install a kiosk?</h1>
  <p>In Slack, teamwork and communication happen in channels. A channel is a single place for a team to share messages, tools, and files. Read on to learn all about how to create, join, and use channels to collaborate with your teammates.</p>
  <h2>All about channels</h2>
  <ul>
    <li>Channels can be organized by team, project, or whatever else is relevant to you.</li>
    <li>Team members can join and leave channels as needed.</li>
    <li>Threads allow for focused and organized side conversations within channels.</li>
  </ul>

  <h2>Create channels</h2>
  <hr/>
  <p>Channels can be organized around anything, and a workspace can have as many as needed — there’s no limit! They're available for all plans: Free, Standard, Plus, and Enterprise Grid.</p>
  <h2>All about channels</h2>
  <ul>
    <li>Channels can be organized by team, project, or whatever else is relevant to you.</li>
    <li>Team members can join and leave channels as needed.</li>
    <li>Threads allow for focused and organized side conversations within channels.</li>
  </ul>

  <h2>Create channels</h2>
  <hr/>
  <p>Channels can be organized around anything, and a workspace can have as many as needed — there’s no limit! They're available for all plans: Free, Standard, Plus, and Enterprise Grid.</p>
  <h2>All about channels</h2>
  <ul>
    <li>Channels can be organized by team, project, or whatever else is relevant to you.</li>
    <li>Team members can join and leave channels as needed.</li>
    <li>Threads allow for focused and organized side conversations within channels.</li>
  </ul>

  <h2>Create channels</h2>
  <hr/>
  <p>Channels can be organized around anything, and a workspace can have as many as needed — there’s no limit! They're available for all plans: Free, Standard, Plus, and Enterprise Grid.</p>
  <h2>All about channels</h2>
  <ul>
    <li>Channels can be organized by team, project, or whatever else is relevant to you.</li>
    <li>Team members can join and leave channels as needed.</li>
    <li>Threads allow for focused and organized side conversations within channels.</li>
  </ul>

  <h2>Create channels</h2>
  <hr/>
  <p>Channels can be organized around anything, and a workspace can have as many as needed — there’s no limit! They're available for all plans: Free, Standard, Plus, and Enterprise Grid.</p>
</section>



<SkinnyFooter></SkinnyFooter>
</main>
  )
}
export default HelpArticle


