import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import Thanksmessage from "../components/contact-components/thanksmessage";
const Thanks = () => (
  <Layout>
    <SEO title="Thanks" description="Thank you for your submission." />
    <Container> <Thanksmessage/></Container>

  </Layout>
)

export default Thanks
