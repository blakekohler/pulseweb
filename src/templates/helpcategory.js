import React from "react"
import * as style from "./helpcategory.module.scss"
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


const HelpCategory = (props) => {

  const articles = props.data.allContentfulHelpTopic.nodes;
  const  category = props.pageContext.category;
  const filteredArticles = articles.filter(article => article.category == category);
 
  const openNav = () => {
    var x = document.getElementById("responsiveNav");
    if (x.className === style.hidden) {
      x.className += style.show;
    } else {
      x.className = style.hidden;
    }
  }
  return (
<main>
<SEO title="Help is on the way!"  description="Let's get you out of here before you break something else!"/>
 <section>
 <div className={style.header}>
<span className={style.headerLeft}>
<Link  to="/"> <img className={style.logo} alt="Pulse Logo" src={logo}/></Link>  <div className={style.helpLinkHolder}>
<Link to="/help" className={style.helplink}>Help Center</Link></div>
</span> 
<Link to="/contact" className={style.supportRequest}>Request Help</Link>
</div>
 </section>
  <section className={style.hero_banner}>
<h1>{props.pageContext.category}</h1>
<div className={style.sectionDescription}>{props.pageContext.categoryDescription}</div>
<div className={style.helpNav}>
  <ul>
    <li className={category === 'Started' ? style.active : ''} > <Link className={style.categoryLink} to="/help/started">Getting Started</Link></li>
    <li className={category === 'Kiosks' ? style.active : ''}> <Link  className={style.categoryLink} to="/help/kiosks">Kiosks</Link></li>
    <li className={category === 'Surveys' ? style.active : ''}><Link  className={style.categoryLink} to="/help/surveys">Surveys</Link></li>
    <li className={category === 'Dashboard' ? style.active : ''}><Link className={style.categoryLink} to="/help/dashboard">Dashboard</Link></li>
    <li className={category === 'Accounts' ? style.active : ''}><Link className={style.categoryLink} to="/help/accounts">Accounts</Link></li>
    <li className={category === 'Billing' ? style.active : ''}><Link className={style.categoryLink} to="/help/billing">Billing</Link></li>
    <li ><Link className={style.categoryLink} to="/help">Search</Link></li>
  </ul>
</div>



  </section>
  <div className={style.helpNavResponsive}  onClick={openNav}>
<div className={style.responseNavSelected}>
  <div className={style.responseTitle}>{category}</div>
  <div className={style.responseNavIcon}>
  <i className={`fas fa-plus`}></i>
  </div>
  </div>
</div>
<div className={style.hidden} id="responsiveNav">
<ul className={style.responsiveList}>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/started">Getting Started</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help/kiosks">Kiosks</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help/surveys">Surveys</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help/dashboard">Dashboard</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help/accounts">Accounts</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help/billing">Billing</Link></li>
    <li  className={style.responseNavLink}><Link className={style.listLink} to="/help">Search</Link></li>

  </ul>
  </div>
<section className={style.articlebody}>
  <div className={style.subCategory}>
    <h3 className={style.helpTopicHeader}>Help Topics</h3>
    {filteredArticles.map(i => 

   <Link className={style.catLink} to={`/help/` + i.slug}>{i.title}</Link> 

    )}
   
  </div>
</section>



<SkinnyFooter></SkinnyFooter>
</main>
  )


  
}
export default HelpCategory


export const helpListQuery = graphql`
  query helpListQuery {
    allContentfulHelpTopic {
      nodes {
        title
        slug
        article {
          childMarkdownRemark {
            html
          }
        }
        category
      }
    }
  }
`