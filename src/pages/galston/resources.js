import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ResourcesPage = () => (
  <Layout exhibit="galston">
    <Seo title="Available Resources" />
    <h1>Available Resources</h1>

    <Yith id="studienbuch-present-test"
          mode="present">
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/103"></figure>
      </div>
    </Yith>
  </Layout>
)

export default ResourcesPage
