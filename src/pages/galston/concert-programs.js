import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ConcertProgramsPage = () => (
  <Layout exhibit="galston">
    <Seo title="Concert Programs" />
    <h1>Concert Programs</h1>

    <Yith mode="comparison">
      <a className="yith-expand" href="#">Expand for Comparative Analysis</a>
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/2"></figure>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
      </div>
    </Yith>
  </Layout>
)

export default ConcertProgramsPage
