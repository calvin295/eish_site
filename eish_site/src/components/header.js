import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `midnightblue`,
      marginBottom: `0`,
    }}
  >
    <div className="topNav">
      {/*nav links have space around*/}
      
        <Link
          to="/"
          style={{
            fontSize: "2em",
          }}
          className="navLink"
        >
          <div id="title" style={{display:'inline-flex',
          alignContent: 'left'}}> {siteTitle} </div>
        </Link>
      <div className="link-wrapper">
      <Link to="/resources/" className="navLink">
        Resources
      </Link>
      <Link to="/services/" className="navLink">
        Services
      </Link>
      <Link to="/rates/" className="navLink">
        Rates
      </Link>
      <Link to="/book/" className="navLink">
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
