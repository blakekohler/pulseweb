import React from "react"
import style from "./heroes.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import heroes from "../images/heroes.jpg"

const Example = () => {
  return (
    <Layout>
      <SEO title="Pulse Heroes" description="Help us honor the heroes inside of your organization by sharing how they have used feedback to improve your organization." />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          
         
            <div className={style.heroImg}>
              <img src={heroes} alt="heroes do extrodinary things" />
            </div>

            <div className={style.header}>
              The world is full of heroes.
            </div>
            <div className={style.subheader}>
              Help us honor the heroes inside of your organization by sharing how they have used feedback to improve your organization. 
            </div>
            <div className={style.mainEvent}>
              <p>
              During these challenging times, the opportunity for heroics is everywhere. Somewhere today, inside your organization, someone is doing something above and beyond the ordinary. We want to highlight these efforts and reward these individuals as much as we possibly can. Share with us something someone on your team has done as the result of feedback you've received (bonus points if it's from your Pulse survey), and we will highlight their efforts and send them a gift from us!
              </p>
              <form className={style.form}  name="heroes"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
    <p className={style.hidden}>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
        <div className={style.row}>
        <input type="hidden" name="form-name" value="heroes" />
          <label for="name" className={style.label} >
            Your Name
          </label>
          
         
          <input
            className={style.input}
            type="text"
            id="name"
            name="yourname"
            aria-label="Your name"
            placeholder="Your name"
            required
          />
        </div>
        <div className={style.row}>
          <label for="organization" className={style.label}   >
            Organization
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="organization"
            name="organization" 
            aria-label="Organization"
            placeholder="Organization"
          />
        </div>
        <div className={style.row}>
          <label className={style.label}  for="heroesname" >
            Hero's Name
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="heroesname"
            name="heroesname"
            placeholder="Hero's name"
          />
        </div>

        <div className={style.row}>
          <label className={style.label}  for="email" >
            Your Email
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
          <label className={style.label}  for="heroesemail" >
            Hero's Email
          </label>
          <br />
          <input
            className={style.input}
            type="email"
            id="herosemail"
            name="herosemail"
            required
            placeholder="Hero's email"
          />
        </div>
      
        <div className={style.row}>
          <label className={style.label}   for="herosstory">
            Hero's Story{" "}
          </label>
          <br />
          <textarea
            className={style.textarea}
            id="herosstory"
            name="herosstory"
            placeholder="Please share the feedback and the action taken by your hero!"
          ></textarea>
        </div>
        <div className={style.buttonRow}>
        <input className={style.submit} type="submit" value="Submit" />
        </div>
      </form>
            </div>
          </div>
         
        </div>
      </Container>
    </Layout>
  )
}
export default Example
