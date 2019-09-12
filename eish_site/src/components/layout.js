/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"


const heroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "yoga-hero.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.image.childImageSharp.fluid} />
}

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="hero">
        {heroImage()}
        <div class="heroText"><h1>Private training and kinesiotherapy sessions at your convenience, in pursuit of your goals, for your health.</h1></div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `960px`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <p></p>
          <Link to="/privacy-policy/">Privacy Policy</Link>
      </footer>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
