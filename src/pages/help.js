import React, {useState} from "react"
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
import algoliasearch from "algoliasearch";


const Help = () => {
  // const posts = props.data.allContentfulBlog.nodes;
  // const { currentPage, numPages } = props.pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  // const nextPage = (currentPage + 1).toString()
  const [searchHits, setSearchHits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const client = algoliasearch("XWTP9BS1XO", "2fbf6e01a06b80bd8e8581bd04bd3b03");
  const index = client.initIndex("artciles");


 const search = (term) =>{
   setSearchTerm(term);
   console.log(term);
    index
    .search(searchTerm)
    .then(({ hits }) => {
     let restructureHits = [];
     hits.map(h => {
       if(h.sys.contentType.sys.id === "helpTopic"){
      let newHit = {
        title: h.fields.title[Object.keys(h.fields.title)[0]],
        article: h.fields.article[Object.keys(h.fields.article)[0]],
        url: "/help/" + h.fields.slug[Object.keys(h.fields.slug)[0]]
      };
      restructureHits.push(newHit);
    }
     })
     console.log(restructureHits);
     setSearchHits(restructureHits);
    })
    .catch(err => {
      console.log(err);
    });
  }

 


  return (
<main className={style.noOver}>
<SEO title="Help Center"  description="Help is on the way!"/>
  <section className={style.hero_banner}>
<div className={style.header}>
<span className={style.headerLeft}>
<Link  to="/"> <img className={style.logo} alt="Pulse Logo" src={logo}/></Link>  <div className={style.helpLinkHolder}>
<Link to="/help" className={style.helplink}>Help Center</Link></div>
</span> 
<Link to="/contact" className={style.supportRequestBig}>Request Help</Link>
<div className={style.hideBig}>
<Link to="/contact" className={style.supportRequestSmall}>Request Help</Link>
</div>
</div>


<div className={style.helphero}> 
<div className={style.helpCenter}>
{ searchTerm.length > 0 ? <h2 className={style.h2}> {searchHits.length} results found for "{searchTerm}"</h2> : <h1 className={style.h1}>Hi. How can we help?</h1>}
  <i className={`fas fa-search ${style.searchIcon}`} ></i>
  <input className={style.helpSearch} placeholder="Find anything (e.g. filters, emails, or reset password)"  value={searchTerm} onChange={e => search(e.target.value)} />
  { searchTerm.length > 0 ? <i onClick={() => setSearchTerm('')} className={`fas fa-times ${style.cancel}`}></i>: ''}
  
  <div className={style.searchText}>
    <span className={style.bold}>Common troubleshooting topics:</span>  <Link to="/help/dashboard">dashboard access</Link>, <Link to="/help/kiosks">offline kiosks</Link>, <a target="_blank" href="https://giphy.com/explore/cat">cats</a>
  </div>
</div>
 
</div>
  </section>
  
  { searchTerm.length > 0 ? 



  //Search hits
  <section className={style.hits}>
    {searchHits.length > 0 ? <>
    {searchHits.map(h => <Link className={style.hit} to={h.url}>
      <h3>{h.title}</h3>
      <p>{h.article.substring(0,200)}...</p>
    </Link>) 
    
    }
    </>
    : 
    <div className={style.noHits}>
      <h3>Yikes! We looked everywhere but couldn't find anything that matched what you were looking for!</h3>
      <Link to="/contact">Reach out to us directly and we'll help!</Link>
    </div>
    }
</section>


  
  : <> <section className={style.helpTopics}>
<div className={style.topicsHolder}>
<div className={style.topicRow}>
  <Link to="/help/started" className={style.topLeft}>
    <div><img src={started}/></div>
    <h2>Getting Started</h2>
    <div>Get started using Pulse </div>
  </Link>
  <Link to="/help/kiosks" className={style.topMiddle}>
  <div><img src={kiosks}/></div>
    <h2>Kiosks</h2>
    <div>Help with your hardware</div>
  </Link>
  <Link to="/help/surveys" className={style.topRight}>
  <div><img src={surveys}/></div>
    <h2>Surveys</h2>
    <div>Everything about surveys</div>
  </Link>
</div>
<div className={style.topicRow}>
<Link to="/help/dashboard" className={style.bottomLeft}>
<div><img src={dashboard} /></div>
    <h2>Dashboard</h2>
    <div>Help with your dashboard</div>
</Link>
<Link to="/help/accounts" className={style.bottomMiddle}>
  <div><img src={accounts}/></div>
    <h2>Accounts </h2>
    <div>Accounts, Roles, Permissions</div>
  </Link>
  <Link to="/help/billing" className={style.bottomRight}>
  <div><img src={billing}/></div>
    <h2>Billing</h2>
    <div>Money & Contracts</div>
  </Link>
</div>

</div>
</section>
<section className={style.featuredArticles}>
  <div className={style.featuredContainer}>
  <h3>Featured Articles</h3>
  <div className={style.listHolder}>
    <ul className={style.articleList}>
      <li><Link to="/help/install-kiosk">How do I install my kiosk?</Link></li>
      <li><Link to="/help/where-should-i-place-my-kiosk">Where should I place my kiosk?</Link></li>
      <li><Link to="/help/how-do-I-choose-a-different-language">How do I choose a different language?</Link></li>
      <li><Link to="/help/how-do-I-give-someone-access">How do I give someone access to my organization's dashboard?</Link></li>
      <li><Link to="/help/how-do-i-reset-my-password">How do I reset my password?</Link></li>
    </ul>
  </div>
  </div>
</section> 
</>}




<SkinnyFooter></SkinnyFooter>
</main>
  )
}
export default Help


