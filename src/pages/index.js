import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const exhibit  = 'default'

const ExhibitsIndex = () => (
  <Layout exhibit={exhibit}>
    <Seo title="Exhibits" />
    <Link to="/galston">Galston Studienbuch</Link>
  </Layout>
)

export default ExhibitsIndex
