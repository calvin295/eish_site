import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `0`,
    }}
  >
    <div className="topNav">
      {/*Need to change from header to just a link with its own styling*/}
      <Link
        to="/"
        style={{
          fontSize: "2em",
        }}
        className="navLink"
      >
        <div id="title"> {siteTitle} </div>
      </Link>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
