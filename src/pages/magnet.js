import React from "react"
import style from "./magnet.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import magnet from "../images/magnets.jpg"

const Example = () => {
  return (
    <Layout>
      <SEO title="I want a Pulse magnet" description="Request one of Pulse For Good's awesome magnets." />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
          
         
            <div className={style.heroImg}>
              <img src={magnet} alt="heroes do extrodinary things" />
            </div>

            <p className={style.header}>
            Get a reminder that love starts with listening 
            </p>
            <div className={style.subheader}>
            There's no such things as a free magnet... oh, wait.
            </div>
            <div className={style.mainEvent}>
              <p>
             At Pulse For Good we believe strongly that the first duty of love is to listen. Listening is the start of transformational changes in individuals, organizations and communities. 
             <br/><br/> As we've traveled the country visiting conferences and events we bring with us our stack of magnets to share with everyone we meet. These magnets have become super popular, popping up on fridges, desks, filing cabients and other metal objects around the country. We figure that if the people we interact with in the wild love them then the internet will love them as well. 
             <br/><br/>You can do your part to help us share our favorite saying by requesting a magnet. We will get you one sent right away. Help share the awesome power of listening by putting this beauty somewhere everyone can see and read its amazing message. Post a picture of it to your favorite social media platform and tag us and we might just send you some other great Pulse For Good swag.
              </p>
              <form className={style.form}  name="magnets"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
    <p className={style.hidden}>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
        <div className={style.row}>
        <input type="hidden" name="form-name" value="magnets" />
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

          <br />
          <input
            className={style.input}
            type="text"
            id="address"
            name="address"
            required
            placeholder="Shipping Address - so we can send you your magnet!"
          />
        </div>
      
        <div className={style.row}>

          <br />
          <textarea
            className={style.textarea}
            id="comments"
            name="comments"
            placeholder="Anything else you'd like to share"
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
