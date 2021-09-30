import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Header from "../Header/Header"
import "./layout.css"
import Footer from "../Footer/footer"
const Layout = ({ children, pageContext, location, crumbLabel }) => {
  const { breadcrumb : { crumbs } } = pageContext;
  const customCrumbLabel = crumbLabel ? crumbLabel : location.pathname.toLowerCase().replace('-', ' ');
  console.log(location)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>
          <Breadcrumb
            crumbs={crumbs}
            location={location}
            crumbLabel={customCrumbLabel}
          />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
