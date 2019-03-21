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
    // TODO: add prop types check
    // eslint-disable-next-line
    const { id, currency, price, imageURL, name } = this.props
    const formattedPrice = Intl.NumberFormat('en-US', { style: 'currency', currency }).format((price / 100).toFixed(2))

    return (
      <form className="w-50 w-third-ns mb4 ph3-l ph2 fl" onSubmit={this.handleSubmit(id)}>
        <button
          type="submit"
          style={{ backgroundImage: `url(${imageURL})` }}
          className="pa0 bn link mw5 dt hide-child br2 cover bg-center w-100 h4 h5-l relative pointer"
        >

          <span className="white child bg-black-40 absolute top-0 left-0 right-0 bottom-0 br2 flex items-center">
            <span className="tc w-100">Buy</span>
          </span>
        </button>
        <h3 className="mb0 mt1 f3-l f4-m f5 no-select">
          {name}
        </h3>
        <p className="mt0 f6 green fl dib no-select">{formattedPrice}</p>
      </form>
    )
  }
}

// eslint-disable-next-line
export default () => (
  <StaticQuery
    query={graphql`
      {
        allStripeSku(
          sort: {
            fields: [attributes___name]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              currency
              price
              image
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
          key={node.id}
          id={node.id}
          currency={node.currency}
          price={node.price}
          imageURL={node.image}
          name={node.attributes.name}
        />
      ))}
    </>)}
  />
)
