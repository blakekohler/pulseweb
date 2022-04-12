import { Link } from "gatsby"
import React from "react"

import * as style from "./footer.module.scss"
import smallLogo from "../images/smalllogo.png"
const Footer = () => {

  return (
    <footer>
      <div className={style.callToAction}>
        <div className={style.left}>
          <div className={style.headline}>Ready to gather feedback?</div>
          <div className={style.subline}>Schedule a 15 minute demo </div>
        </div>
        <div className={style.right}>
        <Link className={style.demo} to="/demo">Schedule Demo</Link>
        </div>
      </div>
      <div className={style.container}>
      <div className={style.logoColumn}>
          <div className={style.logo}>
          <img alt="Pulse Logo" src={smallLogo}/></div>
          
        </div>
        <div className={style.column}>
          <div className={style.header}>Product</div>
          <Link to="/product" className={style.navitem}>Features</Link>
          <Link to="/pricing" className={style.navitem}>Pricing</Link>
          <Link to="/markets" className={style.navitem}>Markets</Link>
          <Link to="/customers" className={style.navitem}>Customers</Link>
          
        </div>
        <div className={style.column}>
          <div className={style.header}>Use Cases</div>
          <Link to="/usecase/volunteer" className={style.navitem}>Volunteer surveys</Link>
          <Link to="/usecase/staff" className={style.navitem}>Employees surveys</Link>
          <Link to="/usecase/housingauthority" className={style.navitem}>Housing Authorities</Link>
          <Link to="/usecase/rescuemission" className={style.navitem}>Rescue Missions</Link>
          <Link to="/usecase/landlord" className={style.navitem}>Landlord surveys</Link>
          
          <div className={style.navitem}></div>
        </div>
        <div className={style.column}>
          <div className={style.header}>Resources</div>
          <Link to="/help" className={style.navitem}>Help</Link>
          <Link to="/privacy" className={style.navitem}>Privacy Policy</Link>
          <Link to="/help/install-kiosk" className={style.navitem}>Install Guide</Link>
          <div className={style.navitem}></div>
         
        </div>
      
        <div className={style.column}>
          <div className={style.header}>Company</div>
          <Link to="/about" className={style.navitem}>About</Link>
          <a href="https://anchor.fm/pulseforgood" className={style.navitem}>Podcast</a>
          <Link to="/press" className={style.navitem}>Press</Link>
          <Link to="/about" className={style.navitem}>Mission</Link>
          <Link to="/press" className={style.navitem}>Media Kit</Link>
          <Link to="/blog" className={style.navitem}>Blog</Link>
          {/* <a href="https://medium.com/pulse-for-good" className={style.navitem}>Blog</a> */}
        </div>
        <div className={style.bigColumn}>
          <div className={style.phone}><a href="tel:435-770-6209">435-770-6209</a></div>
          <div className={style.socialIcons}>
          <a href="https://www.facebook.com/pulseforgood/">
          <i className={`fab fa-facebook-square ${style.big}`}></i>
          </a>
          <a href="https://twitter.com/PulseForGood">
          <i className={`fab fa-twitter-square ${style.big}`}></i>
          </a>
          <a href="https://www.linkedin.com/company/pulseforgood/">
          <i className={`fab fa-linkedin ${style.big}`}></i>
          </a>
          

          
          </div>
<div id="mc_embed_signup">
<form action="https://pulseforgood.us19.list-manage.com/subscribe/post?u=232cb66eeaba1029ba1937bdf&amp;id=9fb73702d5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
	
<div className="mc-field-group">
	<label className={style.newsletter} >Subscribe to Newsletter
	<input type="email" name="EMAIL" className={style.emailInput} id="mce-EMAIL"/>
  </label>
</div>
	<div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style={{display:"none"}}></div>
		<div className="response" id="mce-success-response" style={{display:"none"}}></div>
	</div>   
    {/* <div className={style.hideAway} aria-hidden="true"><input type="text" name="b_232cb66eeaba1029ba1937bdf_9fb73702d5" tabIndex="-1" value=""/></div> */}
    <div className="clear">
      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={style.subscribe}/></div>
    </div>
</form>
</div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
