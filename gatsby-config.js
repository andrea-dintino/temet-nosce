require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Temet Noscet - Blockchain explorer`,
    description: `A PWA to explore the sawtooth blockchain transactions.`,
    author: `Puria Nafisi Azizi <puria@dyne.org> @pna`,
  },
  plugins: [
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        url: `http://localhost:8090/blocks`,
        typePrefix: `sawtooth`,
        name: `Block`,
      }
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
