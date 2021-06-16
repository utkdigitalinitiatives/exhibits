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
        <span>1879</span>
        <span>1899</span>
        <span>1901</span>
        <span className="yith-date">1902</span>
        <span className="yith-emblem">1902</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"></figure>
        <span>1903</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/726"></figure>
        <span>1904</span>
        <span className="yith-date">1905</span>
        <span className="yith-emblem">1905</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/700"
                data-region="2450,1400,3000,2300"
                data-autozoom="true"></figure>
        <span>1906</span>
        <span>1907</span>
        <span className="yith-date">1908</span>
        <span className="yith-emblem">1908</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
                data-region="1050,600,2000,1400"></figure>
        <span>1909</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/721"></figure>
        <span>1910</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/724"></figure>
        <span>1912</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/725"></figure>
        <span>1915</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/728"></figure>
        <span>1919</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/729"></figure>
        <span>1921</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/697"></figure>
        <span>1927</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/690"></figure>
        <span>1950</span>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/688"></figure>
      </div>
    </Yith>

  </Layout>
)

export default GalstonPage
