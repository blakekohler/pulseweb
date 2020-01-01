import React from "react"
import style from "./contactform.module.scss"
import wes from "../../images/wes.jpg"

const Contactform = () => {
  return (
    <div className={style.container}>
    <div className={style.row}>
    <h1>Let's get in touch</h1>
    <br></br>
    <div className={style.secondaryHeader}>
    <h2 className={style.midwidth}>Ready to get started? Need help or have a question? <br/>Do not hesitate to reach out.</h2></div>
       </div>
    <div className={style.left}>
    <form className={style.form}>
        
        <div className={style.row}>
          <label className={style.label} for="name">
            Name
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className={style.row}>
          <label className={style.label} for="name">
            Organization
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="name"
            name="name"
            placeholder="Organization"
          />
        </div>

        <div className={style.row}>
          <label className={style.label} for="email">
            Email
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={style.row}>
          <label className={style.label} for="phone">
            Phone
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone #"
          />
        </div>
        <div className={style.row}>
          <label className={style.label} for="subject">
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
