module.exports = {
  siteMetadata: {
    title: "Western Knights Lodge#56",
    siteUrl: "https://westernknights56.org",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `participants`,
        path: `${__dirname}/src/images/participants`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `community`,
        path: `${__dirname}/src/images/community`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `announcements`,
        path: `${__dirname}/src/images/announcements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scholarship`,
        path: `${__dirname}/src/images/scholarship`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/src/images/members`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `grand`,
        path: `${__dirname}/src/images/grand`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trestle`,
        path: `${__dirname}/src/images/trestle`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `heros`,
        path: `${__dirname}/src/images/heros`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Western Knights",
        short_name: "westernknights56.org",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-westernknights56-org`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    `gatsby-plugin-stripe`,
  ],
};
