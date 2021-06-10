import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const GalstonPage = () => (
  <Layout>
    <Seo title="Gottfried Galston" />
    <h1>Gottfried Galston</h1>
    <div className="yith yith-chronology" id="galston-chronology" data-mode="chronology">
      <div className="yith-structure">
        <span>1900</span>
        <span>1901</span>
        <span className="yith-date">1902</span>
        <span className="yith-emblem">1902</span>
        <figure className="yith-manifest"
             data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"></figure>
        <span>1903</span>
        <span>1904</span>
        <span>1905</span>
        <span>1906</span>
        <span>1907</span>
        <span className="yith-date">1908</span>
        <span className="yith-emblem">1908</span>
        <figure className="yith-manifest"
             data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
             data-region="1050,600,2000,1400"
             data-autozoom="true"></figure>
        <span>1909</span>
        <span>1910</span>
        <span>1911</span>
      </div>
    </div>

  </Layout>
)

export default GalstonPage
