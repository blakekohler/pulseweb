import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import CustomerMain from "../components/customer-components/customerMain"
const Customers = () => (
  <Layout>
    <SEO title="Pulse For Good Partners" description="See some of the wonderful partners using Pulse For Good to engage their vulnerable clients" />
    <Container> <CustomerMain/></Container>

  </Layout>
)

export default Customers
