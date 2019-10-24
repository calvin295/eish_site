import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const showLogo = () => {
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
  <header
    style={{
      background: `midnightblue`,
      marginBottom: `0`,
    }}
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
        <div id="logo"><Link to="/">{showLogo()}</Link></div>
      <div className="link-wrapper">
      {/*<Link to="/resources/" className="navLink" id="marginUp20" activeStyle={{color: "orange"}}>
        Resources
      </Link>*/}
      <Link to="/services/" className="navLink" id="marginUp20" state={{index:0}} activeStyle={{color: "orange"}}>
        Services
      </Link>
      <Link to="/rates/" className="navLink" id="marginUp20" activeStyle={{color: "orange"}}>
        Rates
      </Link>
      <Link to="/book/" className="navLink" id="marginUp20" activeStyle={{color: "orange"}}>
        Book
      </Link>
      </div>
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
