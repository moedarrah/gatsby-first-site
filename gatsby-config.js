module.exports = {
  siteMetadata: {
    framework: `Gatsby-js`,
    author: `Mo Darrah`,
    title: `Mo Darrah`,
    titleTemplate: "%s ",
    description:
      "My name is Mohammed Darrah and am a Front-end developer",
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
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
}
