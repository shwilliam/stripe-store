import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Products from '../components/products'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`, `stripe`, `checkout`]} />
    <h2 className="ph1 no-select">Products</h2>
    <Products />
  </Layout>
)

export default IndexPage
