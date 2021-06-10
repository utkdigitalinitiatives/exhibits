import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const exhibit  = 'apartheid'

const ApartheidIndex = () => (

  <Layout exhibit={exhibit}>
    <Seo title="Apartheid" />

    <section>
      abc
    </section>
  </Layout>
)

export default ApartheidIndex
