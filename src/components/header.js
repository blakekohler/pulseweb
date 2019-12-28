import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./header.module.css"
const Header = ({ siteTitle }) => {
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
    <header>
      <nav className={style.topnav} >
        <Img
          className={style.logo}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
       
        <a href="#news">Pricing</a>
        <a href="#contact">Features</a>
        <a href="#about">Customers</a>
        <a href="#about">Markets</a>
        <a href="#about">Contact</a>
       
        <div className={style.buttonHolder}>
        <a className={style.signin} href="#signIn">Sign In</a>
        <a className={style.demo} href="#schedule">Schedule Demo</a>
        </div>
        <a href="javascript:void(0);" className={style.icon} onClick={openNav}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
      <div className={style.hidden} id="responsiveNav">  
      
        <a href="#news">Pricing</a>
        <a href="#contact">Features</a>
        <a href="#about">Customers</a>
        <a href="#about">Markets</a>
        <a href="#about">Contact</a>
      </div>
    </header>
  )
}
const openNav = () => {
  var x = document.getElementById("responsiveNav");
  if (x.className === style.hidden) {
    x.className += style.show;
  } else {
    x.className = style.hidden;
  }
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
