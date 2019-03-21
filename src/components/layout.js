import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/tachyons.min.css'
import '../styles/utilities.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="layout" className="avenir near-black lh-copy pv3 pv4-l ph4 ph5-l f4-ns f5 mw8 center">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role="main">{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
