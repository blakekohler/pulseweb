import React from "react"
import style from "./contactform.module.scss"
import wes from "../../images/wesbig.jpg"

const Contactform = () => {
  return (
    <div className={style.container}>
    <div className={style.row}>
    <h1 className={style.headline}>Let's get in touch</h1>
    <br></br>
    <div className={style.secondaryHeader}>
    <h2 className={style.midwidth}>Ready to get started? Need help or have a question? <br/>Do not hesitate to reach out.</h2></div>
       </div>
    <div className={style.left}>
    <form className={style.form}  name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
    <p className={style.hidden}>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
        <div className={style.row}>
          <label for="name" className={style.label} >
            Name
          </label>
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
        </div>
        <div className={style.row}>
          <label for="organization" className={style.label} >
            Organization
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="organization"
            name="organization"
            placeholder="Organization"
          />
        </div>

        <div className={style.row}>
          <label for="email" className={style.label} >
            Email
          </label>
          <br />
          <input
            className={style.input}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className={style.row}>
          <label for="phone" className={style.label}  >
            Phone
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone #"
            required
          />
        </div>
        <div className={style.row}>
          <label className={style.label} >
            Notes{" "}
          </label>
          <br />
          <textarea
            className={style.textarea}
            id="subject"
            name="subject"
            placeholder="Anything you'd like to let us know before we reach out.."
          ></textarea>
        </div>
        <div className={style.buttonRow}>
        <input className={style.submit} type="submit" value="Submit" />
        </div>
      </form></div>
    <div className={style.right}>
    <img className={style.washout} src={wes} /></div>
    
    </div>
  )
}
export default Contactform
