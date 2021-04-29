import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.jpg";
import style from "./header.module.css"
const Header = ({ siteTitle }) => {
  return (
    <header>
      {/* Banner For Special Occations */}
      {/* <div className={style.banner}><Link className={style.bannerText} to="/covid">Learn how to use Pulse to fight COVID-19 <i className='fas fa-arrow-circle-right'></i></Link></div> */}
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
        <div  className={`${style.icon} ${style.link}`} role="button" tabIndex="0" onKeyPress={() =>''} onClick={openNav}>
          <i className="fa fa-bars"></i>
        </div>
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
