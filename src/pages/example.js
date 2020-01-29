import React from "react"
import style from "./example.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import logo from "../images/logo.png"
import showcase from "../images/showcase.jpg"
import blake from "../images/blake.jpg"
const Example = () => {
  return (
    <Layout>
      <SEO title="Markets" />
      <Container>
        <div className={style.container}>
          <div className={style.article}>
            <div className={style.header}>
              Pulse selected for Kiln Startup Showcase
            </div>
            <div className={style.details}>
              <img className={style.authorImg} src={blake} /> January 17th 2020
            </div>
            <div className={style.heroImg}>
              <img src={showcase} />
            </div>
            <div className={style.mainEvent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={style.featured}>
            <h2 className={style.featuredHeader}>Featured</h2>
            <div className={style.featuredItem}>
              <img className={style.featuredImg} src={logo} />
              <div className={style.featuredText}>
                For Good: How the UX process helped us do something positive
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default Example
