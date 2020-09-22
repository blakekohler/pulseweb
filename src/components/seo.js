/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, img }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
const image = img || `https://pulsemain-b6050.web.app/img/metaImage.jpg`
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {property: `og:url`,
        content: 'https://www.pulseforgood.com',

        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
        content: image },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    ><link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato|Quicksand&display=swap" rel="stylesheet"/>
    {/* <meta name="google-site-verification" content="SsH7by_MsWJ_LHJLNlSF6IPyfB4MjXdl_JUVueTlEr0" /> */}
   




    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  img: null,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  img: PropTypes.string
}

export default SEO
