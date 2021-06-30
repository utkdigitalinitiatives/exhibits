import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ConcertProgramsPage = () => (
  <Layout exhibit="galston">
    <Seo title="Concert Programs" />
    <h1>Concert Programs</h1>

    <p>This is a bound volume of the printed programs from each of Galston’s forty concert cycles between 1919 and 1921. The volume was likely bound especially for Galston, and bears his “Ex Libris” plate on the inside front cover.</p>

    <p>The programs in this volume can be compared with the handwritten lists of each concert that Galston wrote in the back of the Studienbuch bound volume.</p>

    <Yith id="studienbuch-notes-1"
              mode="comparison">
          <a className="yith-expand" href="#">Galston</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/18"></figure>
          </div>
        </Yith>
  </Layout>
)

export default ConcertProgramsPage
