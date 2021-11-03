import React from "react"

import * as style from "./demo.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"

const Demo = () => (
  <Layout>
    <SEO title="Schedule Demo" description="Schedule a time to see the Pulse For Good system in action" />
    <Container> 
    <div className={style.container}>
    <div className={style.row}>
    <h1 className={style.headline}>Schedule a call with our survey experts</h1>
    <br></br>
    <div className={style.secondaryHeader}>
    <h2 className={style.midwidth}>Fill out the form below and one of our survey experts will reach out to setup a time that is convinent for you. </h2></div>
       </div>
    <div className={style.left}>
    <form className={style.form}  name="demo"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
    <p className={style.hidden}>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
        <div className={style.row}>
          <label className={style.label} >
            Name
         
          <br />
          <input type="hidden" name="form-name" value="demo" />
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
          <label className={style.label} >
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
          <label className={style.label} >
            Email
        
          <br />
          <input
            className={style.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
            </label>
        </div>
        <div className={style.row}>
          <label className={style.label} >
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
            placeholder="How do you see your organization using our feedback platform? What questions do you have?"
          ></textarea>
           </label>
        </div>
        <div className={style.buttonRow}>
        <input className={style.submit} type="submit" value="Submit" />
        </div>
      </form></div>
    <div className={style.right}>
    <h3 className={style.surveyheader}>Try out a survey below!</h3>
    <iframe title="Try one of our surveys!" className={style.demoSurvey} src="https://kiosk.pulseforgood.com/survey/demo"></iframe>
    
    </div>
    
    </div>
    </Container>

  </Layout>
)

export default Demo
