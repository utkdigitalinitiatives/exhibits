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
      <span className="yith-date">1879</span>
      <span className="yith-date">1899</span>
      <span className="yith-date">1900</span>
      <span className="yith-date">1902</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"></figure>
      <span className="yith-date">1903</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/726"
              ata-region="1338,1238,2902,3479"
              data-autozoom="true"></figure>
      <span className="yith-date">1905</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/700"
              data-region="2450,1400,3000,2300"
              data-autozoom="true"></figure>
              <span className="yith-date">1907</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/696"
              data-region="2168,729,3947,2732"
              data-autozoom="true"></figure>
      <span className="yith-date">1908</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
              data-region="1050,600,2000,1400"></figure>
      <span className="yith-date">1909</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/721"
              data-region="835,446,5847,4691"></figure>
      <span className="yith-date">1910</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/724"
              data-region="1667,1541,3188,2855"></figure>
      <span className="yith-date">1912</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/725"
              data-region="348,484,6027,4464"></figure>
      <span className="yith-date">1915</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/725"
              data-region="234,471,3017,4233"></figure>
      <span className="yith-date">1919</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/729"
              data-region="734,670,4360,5541"></figure>
      <span className="yith-date">1921</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/697"
              data-region="524,538,4395,5960"></figure>
      <span className="yith-date">1927</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/690"
              data-region="12,32,7384,5522"></figure>
      <span className="yith-date">1950</span>
      <figure className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/688"
              data-region="475,498,3717,4773"></figure>
      </div>
    </Yith>

  </Layout>
)

export default GalstonPage
