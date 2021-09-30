import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import WebinarTemplate from "../templates/WebinarTemplate"

const IndexPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Home">
    <Seo title="Home" />
    <WebinarTemplate />
  </Layout>
)

export default IndexPage
