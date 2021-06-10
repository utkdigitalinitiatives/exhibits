/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../sass/styles.scss"
import { Helmet } from "react-helmet"

const Layout = ({ exhibit, children }) => {

  const data = useStaticQuery(graphql`
    query ExhibitDataQuery {
      allDataJson {
        edges {
          node {
            slug,
            title,
            navigation {
              to
              text
            },
            styles
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Thing 1</title>
      </Helmet>
      <Header siteTitle="placeholder" />
      <main>
        <article>{children}</article>
      </main>
      <footer id="utk-lib-footer"></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
