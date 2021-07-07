import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ConcertProgramsPage = () => (
  <Layout exhibit="galston">
    <Seo title="Concert Programs" />
    <h1>Concert Programs</h1>
  <div>
    <p>In Munich, between October 1919 and February 1921, Galston performed, from memory, a series of over 40 recitals. The performances encompassed an impressive representation of works by the most celebrated composers as well as works by his contemporaries. The concert programs declare that the entirety of significant piano literature from the beginning to the present is covered by these 40 concerts. By the end of the series, Galston had performed over 200 works in just over 70 weeks.
This volume of individual printed programs was likely bound especially for Galston, and bears his “Ex Libris” plate on the inside front cover. The composers and works detailed in this volume echo the list of concerts written in Galston's hand at the end of the Studienbuch. The handwritten lists include a few additional details, but it is not known why Galston transcribed the concert series in detail at the back of the Studienbuch bound volume; it is not included in subsequent editions of the Studienbuch.</p>

    <Yith id="studienbuch-notes-1"
              mode="comparison">
          <a className="yith-expand" href="#">Expand in viewer</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/8"></figure>
          </div>
        </Yith>
        </div>
  </Layout>
)

export default ConcertProgramsPage
