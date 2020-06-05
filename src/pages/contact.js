import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import Contactform from "../components/contact-components/contactform";

const Contact = () => (
  <Layout>
    <SEO title="Contact" description="Contact Pulse For Good"/>
    <Container> <Contactform/></Container>

  </Layout>
)

export default Contact
