require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "Travel Agency",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "YThhODczYjYtYWMzZi00MzExLWFkMDMtNTgxZmMxNjM2YzYxNjM3Nzg2MzE4MTkwNjQxOTUx",
        autopop: true,
      },
    },
  ],
};
