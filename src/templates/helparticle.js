import React from "react"
import style from "./helparticle.module.scss"
import { Link, graphql } from "gatsby"
import logo from "../images/logo.png";

import SEO from "../components/seo"
import SkinnyFooter from "../components/skinnyfooter"

const HelpArticle = ({ data }) => {
  
  const { title, article, category } = data.contentfulHelpTopic;

  const categories = [
    {category: 'Accounts', description: 'Accounts, Roles, Permissions'},
    {category: 'Started', description: 'Get started using Pulse'},
    {category: 'Dashboard', description: 'Help with your dashboard'},
    {category: 'Kiosks', description: 'Help with your hardware'},
    {category: 'Billing', description: 'Money & Contracts'},
    {category: 'Surveys', description: 'Everything about surveys'},
  ]

  const categoryDescription = categories.filter(i => i.category == category)[0].description;
  
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
<SEO title="Help is on the way!"  description={article.title}/>
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
<h1>{category}</h1>
<div className={style.sectionDescription}>{categoryDescription}</div>
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
  <div className={style.responseTitle}>Getting Started</div>
  <div className={style.responseNavIcon}>
  <i class="fas fa-plus"></i>
  </div>
  </div>
</div>
<div className={style.hidden} id="responsiveNav">
<ul className={style.responsiveList}>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/started">Getting Started</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/kiosks">Kiosks</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/surveys">Surveys</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/dashboard">Dashboard</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/accounts">Accounts</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help/billing">Billing</Link></li>
    <li className={style.responseNavLink}><Link className={style.listLink} to="/help">Search</Link></li>
  </ul>
  </div>
<section className={style.articlebody}>
  <h1>{title}</h1>
  <div className={style.bodyText} dangerouslySetInnerHTML={{
    __html: article.childMarkdownRemark.html,
  }}></div>
</section>



<SkinnyFooter></SkinnyFooter>
</main>
  )
}
export default HelpArticle



export const pageQuery = graphql`
  query($slug: String!) 
  {
    contentfulHelpTopic(slug: { eq: $slug }) 
    {
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
`;