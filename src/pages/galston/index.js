import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonIndex = () => (

  <Layout exhibit="galston">
    <Seo title="Galston Studienbuch" />
    <section className="exhibits-section">
      <div>
        <p>a</p>
      </div>
      <div>
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
      </div>
    </section>
  </Layout>

)

export default GalstonIndex
