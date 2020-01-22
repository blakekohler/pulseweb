import React from "react"
import style from "./example.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
const Example = () => {
  return (
    <Layout>
      <SEO title="Markets" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
            <div className={style.header}></div>
            <div className={style.details}></div>
            <div className={style.heroImg}></div>
            <div className={style.mainEvent}></div>
          </div>
          <div className={style.featured}>
            <div className={style.featuredItem}>
              <img className={style.featuredImg} src={logo} />
              <div className={style.featuredText}></div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Example
