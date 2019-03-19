import React from 'react'

class SubscribeButton extends React.Component {
  componentDidMount () {
    this.stripe = window.Stripe('pk_test_ROekgiuH1nayDJx8urvw50tf', {
      betas: ['checkout_beta_4']
    })
  }

  render () {
    return (
      <form
        {...this.props}
        onSubmit={(e) => {
          e.preventDefault()

          this.stripe
            .redirectToCheckout({
              items: [{ plan: 'plan_EjCZHM9B5T4Fki', quantity: 1 }],

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
        }}
      >
        <button
          type="submit"
          style={{
            backgroundColor: `#fff`,
            border: `none`,
            padding: `8px 10px`,
            cursor: `pointer`
          }}
        >
          Subscribe
        </button>
      </form>
    )
  }
}

export default SubscribeButton
