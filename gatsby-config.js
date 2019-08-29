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
          trackingId: "UA-146655581-1"
        },
      },
  ],
}
