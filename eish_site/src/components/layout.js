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

/*

*/

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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <main>{children}</main>
      <footer>
        <div
          id="foot-flex"
        >
          <div style={{ margin: "0px 0px 0px 0px" }}>
            <address>
              <br />
              <h6>Contact</h6>
              <a href="mailto:aarkl050@mtroyal.ca">aarkl050@mtroyal.ca</a>
              <br />
            </address>
          </div>
          <h6 style={{ margin: "10px 0px 0px 0px" }}>
            Available <br />
            Mon 7am - 8pm <br />
            Tue 7am - 8pm <br />
            Wed 7am - 8pm <br />
            Thu 7am - 8pm <br />
            Fri 7am - 8pm <br />
            Sat 7am - 8pm <br />
            Sun 7am - 8pm <br />
          </h6>
        
        </div>
        <div style={{marginLeft:"auto", marginRight: "auto"}}>
          <Link to="/services/">Services</Link> |{" "}
          <Link to="/rates/">Rates</Link> |{" "}  
          <Link to="/book/">Book</Link> <br/>
          <Link to="/privacy-policy/">Privacy Policy</Link>
          <p>
            © {new Date().getFullYear()}, site by
            {` `}
            <a href="http://seandonachiue.github.io" title="Sean Donachiue">
              Sean Donachiue
            </a>
          </p>
                    <p>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
          
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
