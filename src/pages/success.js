import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" keywords={[`success`, `stripe`, `checkout`]} />
    <h2>Success! Your purchase has been made. <span role="img" aria-label="Cool emoji">😎</span></h2>
  </Layout>
)

export default SuccessPage
