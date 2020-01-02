import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import Features from "../components/product-components/features";


const Product = () => (
  <Layout>
    <SEO title="Product" />
    <Container> <Features></Features></Container>
   
  </Layout>
)

export default Product
