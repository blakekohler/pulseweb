module.exports = {
   siteMetadata: {
    siteUrl: `https://www.pulseforgood.com`,
    title: `Pulse For Good | Client satisfaction tracking for vulnerable populations`,
    description: `Capture feedback from your clientele using secure kiosks.
    Improve your services, engage vulnerable populations, and tell compelling funding stories with data straight from your clients
     `,
    author: `@PulseForGood`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lx9bvy74ql0s`,
        accessToken: `cc43ffeebefc5ffe498917dcbbb35b458faafb0cc6032b786ea87296a16fc4a6`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-124556882-1",
      },
    },
    {
      resolve: `@tmttn/gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `2186346`,
  
        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: false
      }
    },
    
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '181006806325359',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
