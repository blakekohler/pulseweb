import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./footer.module.scss"
import smallLogo from "../images/smalllogo.png"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div className={style.callToAction}>
        <div className={style.left}>
          <div className={style.headline}>Ready to get started?</div>
          <div className={style.subline}>Schedule a 15 minute demo </div>
        </div>
        <div className={style.right}>
        <Link className={style.demo} to="/demo">Schedule Demo</Link>
        </div>
      </div>
      <div className={style.container}>
      <div className={style.logoColumn}>
          <div className={style.logo}>
          <img src={smallLogo}/></div>
          
        </div>
        <div className={style.column}>
          <div className={style.header}>Product</div>
          <div className={style.navitem}>Features</div>
          <div className={style.navitem}>Pricing</div>
          <div className={style.navitem}>Markets</div>
          <div className={style.navitem}>Customers</div>
        </div>
        <div className={style.column}>
          <div className={style.header}>Use Cases</div>
          <div className={style.navitem}>Volunteers</div>
          <div className={style.navitem}></div>
        </div>
        <div className={style.column}>
          <div className={style.header}>Resources</div>
          <div className={style.navitem}>Privacy Policy</div>
          <div className={style.navitem}>Install Guide</div>
         
        </div>
      
        <div className={style.column}>
          <div className={style.header}>Company</div>
          <Link to="/about" className={style.navitem}>About</Link><br/>
          <Link to="/press" className={style.navitem}>Press</Link><br/>
          <Link to="/about" className={style.navitem}>Mission</Link><br/>
          <Link to="/press" className={style.navitem}>Media Kit</Link><br/>

          <a href="https://medium.com/pulse-for-good" className={style.navitem}>Blog</a>
        </div>
        <div className={style.column}>
          
        </div>
        <div className={style.column}>
          
        </div>
        <div className={style.column}>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
