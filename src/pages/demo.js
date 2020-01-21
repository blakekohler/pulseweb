import React from "react"
import { Link } from "gatsby"
import style from "./demo.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"

const Demo = () => (
  <Layout>
    <SEO title="Schedule Demo" />
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
          </label>
          <br />
          <input type="hidden" name="form-name" value="demo" />
          <input
            className={style.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className={style.row}>
          <label className={style.label} >
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
          <label className={style.label} >
            Email
          </label>
          <br />
          <input
            className={style.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={style.row}>
          <label className={style.label} >
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
          <label className={style.label} >
            Notes{" "}
          </label>
          <br />
          <textarea
            className={style.textarea}
            id="subject"
            name="subject"
            placeholder="How do you see your organization using our feedback platform? What questions do you have?"
          ></textarea>
        </div>
        <div className={style.buttonRow}>
        <input className={style.submit} type="submit" value="Submit" />
        </div>
      </form></div>
    <div className={style.right}>
    <h3 className={style.surveyheader}>Try out a survey below!</h3>
    <iframe className={style.demoSurvey} src="https://kiosk.pulseforgood.com/survey/demo"></iframe>
    
    </div>
    
    </div>
    </Container>

  </Layout>
)

export default Demo
