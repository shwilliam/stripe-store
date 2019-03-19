import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CancelPage = () => (
  <Layout>
    <SEO title="Oops" keywords={[`cancel`, `stripe`, `checkout`]} />
    <h2>Oops! Looks like you closed the payment tab. <span role="img" aria-label="Sad emoji">😢</span></h2>
    <Link to="/">
      Return home
    </Link>
  </Layout>
)

export default CancelPage
