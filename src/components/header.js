import PropTypes from 'prop-types'
import React from 'react'

import SubscribeButton from './subscribe-button'

const Header = ({ siteTitle }) => (
  <header className="bb tl-ns ph1 pb3 tc mw8 center f3 lh-title">
    <h1 className="ma0 dib pv2 no-select">
      {siteTitle}
    </h1>
    <SubscribeButton className="fr-ns pv3-ns tc"/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
