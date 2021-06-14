import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const exhibit  = 'apartheid'

const Boycotts = () => (

  <Layout exhibit={exhibit}>
    <Seo title="Boycotts" />

    <section>
      abc
    </section>
  </Layout>
)

export default Boycotts
