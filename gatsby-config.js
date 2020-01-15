/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata:{
    title:"BackRoads",
    description:"Explore awesome worldwide tours & discover what makes each of the unique. Forget your daily routine & say yes to adventure",
    author:"@jamesfrancis",
    twitterUsername:"@johndoe",
    image:'/defaultBcg.jpeg',
    siteUrl:'https://gatsby-project-jimmy.netlify.com',

  },
  plugins:[
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-project-jimmy.netlify.com',
        sitemap: 'https://gatsby-project-jimmy.netlify.com/sitemap.xml',
        policy: [{ userAgent: "*", allow: "/"},]

      },
    },
    'gatsby-transformer-sharp', 
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-playground',
  ],
  /* Your site config here */
}
