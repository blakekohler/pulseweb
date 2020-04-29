import React from "react"
import Container from "../components/contentContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./404.module.scss"
import sadkiosk from "../images/sadkiosk.png"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oh boy! Something is wrong."  description="Let's get you out of here before you break something else!"/>
    <Container>
        <div  className={style.container}>
        <div className={style.holder}>
        <img className={style.sadguy} src={sadkiosk}></img>
         <h1>Whoa! Something has wrong horribly wrong.... </h1>
         <h2>okay, maybe not horribly but something is definitely not right.</h2>
        <p>
          We're not sure what is wrong but lets get you out of here before you break something else. <br></br> I mean, lets get you back to the homepage so you can find out more about how to gather feedback more effectively. 
        </p>
        <Link to="/" className={style.navitem}>Get me out of here!</Link><br/>
         </div>
        </div>
      </Container>
    
  </Layout>
)

export default NotFoundPage
