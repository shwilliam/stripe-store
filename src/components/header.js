import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SubscribeButton from './subscribe-button'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      padding: `1.45rem 1.0875rem`,
      display: `flex`,
      flexFlow: `wrap`,
      justifyContent: `space-between`
    }}
  >
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontSize: `2.6rem`,
          whiteSpace: `nowrap`
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <SubscribeButton
      style={{
        marginTop: `10px`
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
