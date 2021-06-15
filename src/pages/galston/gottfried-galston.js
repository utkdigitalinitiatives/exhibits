import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const GalstonPage = () => (
  <Layout exhibit="galston">
    <Seo title="Gottfried Galston" />

    <section className="exhibits-section">
      <div className="yith yith-chronology" id="galston-chronology" data-mode="chronology">
        <div className="yith-structure">
          <span>1870</span>
          <span className="yith-date">1879</span>
          <span>1880</span>
          <span>1890</span>
          <span className="yith-date">1899</span>
          <figure className="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/leipzig_gewandhaus.json"></figure>
          <span>1900</span>
          <span className="yith-date">1902</span>
          <figure className="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"></figure>
                    <span className="yith-date">1908</span>
          <figure className="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
                  data-region="1050,600,2000,1400"
                  data-autozoom="true"></figure>
          <span>1910</span>
          <span>1920</span>
          <span>1930</span>
          <span>1940</span>
          <span>1950</span>
        </div>
      </div>
    </section>

  </Layout>
)

export default GalstonPage
