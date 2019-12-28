import React from "react"
import { Link } from "gatsby"
import style from "./index.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/index-components/hero"
import CustomerList from "../components/index-components/customerlist";
import FeatureOverview from "../components/index-components/featureoverview";
import PressList from "../components/index-components/presslist";
import Experts from "../components/index-components/experts";
import MarketsOverview from "../components/index-components/marketsoverview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
  
    <CustomerList></CustomerList>
    <PressList></PressList>
    <FeatureOverview></FeatureOverview>
    <Experts></Experts>
    <MarketsOverview></MarketsOverview>
    <div>Social Mission </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
