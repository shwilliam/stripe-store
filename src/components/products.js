import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Products extends React.Component {
  componentDidMount () {
    this.stripe = window.Stripe('pk_test_ROekgiuH1nayDJx8urvw50tf', {
      betas: ['checkout_beta_4']
    })

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (sku) {
    return e => {
      e.preventDefault()

      this.stripe
        .redirectToCheckout({
          items: [{ sku, quantity: 1 }],

          // redirect not guaranteed
          successUrl: 'https://stripe-store.netlify.com/success',
          cancelUrl: 'https://stripe-store.netlify.com/cancel'
        })
        .then((result) => {
          if (result.error) {
            // browser/network error
            // eslint-disable-next-line
            alert(result.error.message)
          }
        })
    }
  }

  render () {
    const { id, currency, price, name } = this.props
    const formattedPrice = Intl.NumberFormat('en-US', { style: 'currency', currency }).format((price / 100).toFixed(2))

    return (
      <form onSubmit={this.handleSubmit(id)}>
        <h3>{name} ({formattedPrice})</h3>
        <button type="submit">Buy</button>
      </form>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allStripeSku {
          edges {
            node {
              id
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={data => (<>
      {data.allStripeSku.edges.map(({ node }) => (
        <Products
          id={node.id}
          currency={node.currency}
          price={node.price}
          name={node.attributes.name}
        />
      ))}
    </>)}
  />
)
