import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/logo.jpg";
import style from "./header.module.css"
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
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
      <Link to="/"> <img className={style.logo} alt="Pulse Logo" src={logo}/></Link>
       <Link className={style.link} to="/product/">Product</Link>
       <Link className={style.link} to="/pricing/">Pricing</Link>
       <Link className={style.link} to="/customers/">Customers</Link>
       <Link className={style.link} to="/markets/">Markets</Link>
       <Link className={style.link} to="/contact/">Contact</Link>
        <div className={style.buttonHolder}>
        <a className={style.signin} href="https://kiosk.pulseforgood.com/">Sign In</a>
        <Link className={style.demo} to="/demo">Schedule Demo</Link>
        </div>
        <a  href="javascript:void(0);" className={`${style.icon} ${style.link}`} onClick={openNav}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
      <div className={style.hidden} id="responsiveNav">  
      <div className={style.responsiveNavInner}>
      <Link className={style.link} to="/product/">Product</Link>
       <Link className={style.link} to="/pricing/">Pricing</Link>
       <Link className={style.link} to="/customers/">Customers</Link>
       <Link className={style.link} to="/markets/">Markets</Link>
       <Link className={style.link} to="/contact/">Contact</Link>
      </div>
        
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
