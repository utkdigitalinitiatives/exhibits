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
import _ from "lodash"
import UniversalHeader from "./UniversalHeader"

const Layout = ({ exhibit, children }) => {

  const results = useStaticQuery(graphql`
    query ExhibitDataQuery {
      allDataJson {
        edges {
          node {
            slug,
            title,
            nav {
              to
              text
            },
            styles
          }
        }
      }
    }
  `)

  const items = results.allDataJson.edges.map(function(el){
    return el.node
  });

  const data = _.find(items, {
      'slug': exhibit
    })

  return (
    <>
      <Helmet>
        <title>Thing 1</title>
      </Helmet>
      <UniversalHeader/>
      <Header structure={data} />
      <main>
        <article>{children}</article>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
