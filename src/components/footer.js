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
          <div className={style.demo}>Schedule Demo</div>
        </div>
      </div>
      <div className={style.container}>
      <div className={style.column}>
          <div className={style.logo}>
          <img src={smallLogo}/></div>
          
        </div>
        <div className={style.column}>
          <div className={style.header}>Product</div>
          <div className={style.navitem}>Hardware</div>
          <div className={style.navitem}>Software</div>
        </div>
        <div className={style.column}>
          <div className={style.header}>Use Cases</div>
          <div className={style.navitem}>Career</div>
          <div className={style.navitem}>Blog</div>
        </div>
        <div className={style.column}>
          <div className={style.header}>Resources</div>
          <div className={style.navitem}>Privacy Policy</div>
          <div className={style.navitem}>Install Guide</div>
         
        </div>
      
        <div className={style.column}>
          <div className={style.header}>Company</div>
          <div className={style.navitem}>About</div>
          <div className={style.navitem}>Career</div>
          <div className={style.navitem}>Blog</div>
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
