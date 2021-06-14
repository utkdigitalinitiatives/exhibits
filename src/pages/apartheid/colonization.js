import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const exhibit  = 'apartheid'

const Colonization = () => (

  <Layout exhibit={exhibit}>
    <Seo title="Colonization" />

    <section>
      abc
    </section>
  </Layout>
)

export default Colonization
