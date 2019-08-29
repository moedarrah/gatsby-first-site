module.exports = {
  siteMetadata: {
    framework: `Gatsby`,
    author: `Mohammed Darrah`,
    title:`Front-end Developer`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-146655581-1",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Enables Google Optimize using your container Id
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "example.com",
        },
      },
  ],
}
