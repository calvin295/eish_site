module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: `https://rehabinmotion.netlify.com`,
    title: `Rehab in Motion`,
    description: `Physical Rehab and Exercise Therapy service bringing therapeutic care to you. Book an appointment with your kinesio therapist today.`,
    author: `@seandonachiue`,
  },
  plugins: [
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
       resolve: `gatsby-plugin-sitemap`,
       options: {
          exclude: [`/google3641cb629fe6b470.html`],
       },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#25345E`,
        theme_color: `#25345E`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
