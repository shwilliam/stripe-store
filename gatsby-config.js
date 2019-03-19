module.exports = {
  siteMetadata: {
    title: `Stripe store`,
    author: `@shwilliam`,
    description: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stripe-store`,
        short_name: `store`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    }
  ]
}
