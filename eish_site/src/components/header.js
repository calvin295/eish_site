import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const ShowLogo = () => {
  const logo = useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "vitruvian-white.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
  return <Img fluid={logo.image.childImageSharp.fluid} onclick="navigateTo()"/>
}

const Header = ({ siteTitle }) => (
  <header id="top"
  >
      {/*nav links have space around*/}
    
    <div className="topNav">
        <Link
          to="/"
          style={{
            fontSize: "2em",
          }}
          className="navLink"
          id="title"
          activeStyle={{color: "white"}}
        >
          <div style={{display:'inline-flex',
          alignContent: 'left'}}> {siteTitle} </div>
        </Link>
        <div id="logo"><Link to="/">{ShowLogo()}</Link></div>
      <div className="link-wrapper">
      {/*<Link to="/resources/" className="navLink" id="marginUp20" activeStyle={{color: "orange"}}>
        Resources
      </Link>*/}
      <Link to="/services/" className="navLink" id="marginUp20" state={{index:0}} activeStyle={{color: "#E39774"}}>
        Services
      </Link>
      <Link to="/rates/" className="navLink" id="marginUp20" activeStyle={{color: "#E39774"}}>
        Rates
      </Link>
      <Link to="/book/" className="navLink" id="marginUp20" activeStyle={{color: "#E39774"}}>
        Book
      </Link>
      </div>
    </div>
    <div id="covid">
      <p>Announcement: All personalized exercise programs, active rehab, and training services have resumed under the latest COVID-19 guidelines from AHS</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
