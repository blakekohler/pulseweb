import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import CustomerMain from "../components/customer-components/customerMain"
const Customers = () => (
  <Layout>
    <SEO title="Customers" />
    <Container> <CustomerMain/></Container>

  </Layout>
)

export default Customers
