import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const exhibit  = 'default'

const ExhibitsIndex = () => (
  <Layout exhibit={exhibit}>
    <Seo title="Exhibits Demo" />
    <div>z</div>
  </Layout>
)

export default ExhibitsIndex
