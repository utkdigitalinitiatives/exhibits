import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonPage = () => (
  <Layout exhibit="galston">
    <Seo title="Gottfried Galston" />

    <Yith id="studienbuch-chronology"
          mode="chronology">
      <div className="yith-structure">
        <span className="yith-date">1902</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"></figure>
        <span className="yith-date">1905</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/700"
                data-region="2450,1400,3000,2300"
                data-autozoom="true"></figure>
        <span className="yith-date">1908</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
                data-region="1050,600,2000,1400"></figure>
      </div>
    </Yith>

  </Layout>
)

export default GalstonPage
