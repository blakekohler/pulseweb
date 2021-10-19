import React from "react"
import * as style from "./gated.module.scss"
import logo from "../../images/logo.png"
import SEO from "../../components/seo"

const Example = () => {
  return (
    <div>

<SEO title="Markets" />

<div className={style.logoRow}>
  <img className={style.logo} src={logo}/>
</div>


<div className={style.colorRow}>
<div className={style.itemType}>PDF</div>
<h1 className={style.contentTitle}>Running an effective organizational retrospective</h1>
   </div>
   <div className={style.container}>

   <div className={style.left}>
<h1 className={style.row}>What's inside?</h1>
<p className={style.row}> Taking time as a team to evaluate is an important part of improving any organization. Using survey information to conduct a retrospective can be a significant first step in finding ways to improve. </p>
<p>Using this simple guide you can run your first organizational retrospective or Pulse check. </p>
<p>In this guide we cover:</p>
<ul>
  <li>How to setup a retrospective</li>
  <li>Topics you should cover</li>
  <li>Materials you should bring</li>
</ul>
</div>
<div className={style.right}>
 
<form className={style.form}  name="contact"
    method="post"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
       <h2>Get the Guide</h2>
<p className={style.hidden}>
<label>Don’t fill this out if you're human: <input name="bot-field" /></label>
</p>
    <div className={style.row}>
      <label for="name" className={style.label} >
        Name
      
      <br />
      <input type="hidden" name="form-name" value="contact" />
      <input
        className={style.input}
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
      />
      </label>
    </div>
    <div className={style.row}>
      <label for="organization" className={style.label} >
        Organization
     
      <br />
      <input
        className={style.input}
        type="text"
        id="organization"
        name="organization"
        placeholder="Organization"
      />
       </label>
    </div>

    <div className={style.row}>
      <label for="email" className={style.label} >
        Email
      
      <br />
      <input
        className={style.input}
        type="email"
        id="email"
        name="email"
        required
        placeholder="Email"
      />
      </label>
    </div>
    <div className={style.row}>
      <label for="phone" className={style.label}  >
        Phone
     
      <br />
      <input
        className={style.input}
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone #"
        required
      />
       </label>
    </div>
    <div className={style.row}>
      <label className={style.label} >
        Notes{" "}
     
      <br />
      <textarea
        className={style.textarea}
        id="subject"
        name="subject"
        placeholder="Anything you'd like to let us know before we reach out.."
      ></textarea>
       </label>
    </div>
    <div className={style.buttonRow}>
    <input className={style.submit} type="submit" value="Submit" />
    </div>
  </form></div>

</div>
</div>
    
  )
}
export default Example
