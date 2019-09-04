import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div class="topNav"> {/*Need to change from header to just a link with its own styling*/}
      <Link
        to="/"
        style={{
          fontSize: '2em',
        }}
        className='navLink'
      >
        {siteTitle}
      </Link>
      <Link
        to="/bio"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1em',
        }}
        className='navLink'
      >
        About
      </Link>
      <Link
        to="/resources"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1em',
        }}
        className='navLink'
      >
        Resources
      </Link>
      |
      <Link
        to="/services"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1em',
        }}
        className='navLink'
      >
        Services
      </Link>
      |
      <Link
        to="/rates"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1em',
        }}
        className='navLink'
      >
        Rates
      </Link>
      |
      <Link
        to="/book"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1em',
        }}
        className='navLink'
      >
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
