import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="yith yith-projection" id="flowers-projection" data-mode="projection">
      <a className="yith-expand" href="#">Heilman's Flora</a>
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/heilman/197">
          <figcaption>
            <b>Butterfly Maple, Acer japonicum</b>
          </figcaption>
        </figure>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/heilman/264">
          <figcaption>
            <b>Red Maple, Acer rubrum</b>
          </figcaption>
        </figure>
      </div>
    </div>
  </Layout>
)

export default IndexPage
