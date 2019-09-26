module.exports = {
  siteMetadata: {
    framework: `Gatsby-js`,
    author: `Mohammed Darrah`,
    title:`frontendare`,
    titleTemplate: "%s · The Real Hero",
    description:
    "frontend front-end frontendare nackademin developer utviklare",
    url: "https://www.frontendare.com",
    image: "/image/logo.png", 
    twitterUsername: "@mmdarrah",

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
