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
    <div className="concert-programs-flex">
    <div className="concert-programs-description">
    <p>In Munich, between October 1919 and February 1921, Galston performed, from memory, a series of over 40 recitals. The performances encompassed an impressive representation of works by the most celebrated composers as well as works by Galston's contemporaries. The concert programs state that the entirety of significant piano literature from the beginning to the present is covered by these 40 concerts. By the end of the series, Galston had performed over 200 works in just over 70 weeks. </p>
    <p>This volume of individual printed programs was likely bound especially for Galston, and bears his “Ex Libris” plate on the inside front cover. The composers and works detailed in this volume match the list of concerts written in Galston's hand at the end of the <span class="studybook">Studienbuch</span>. These handwritten lists include a few additional details, for example, about arrangers, but it is not known why Galston transcribed the concert series in detail at the back of the <span class="studybook">Studienbuch</span> bound volume; the list was not included in subsequent editions of the <span class="studybook">Studienbuch</span>.
    </p>
    </div>
    <div className="concert-programs-wrapper">
      <Yith id="concert-programs-comparison"
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
      </div>
      <div className="concert-programs-columns">
        <div className="col1">
          <div className="item-1">Concert program 1</div>
          <div className="item-2">Concert program 2</div>
          <div className="item-3">Concert program 3</div>
          <div className="item-4">Concert program 4</div>
          <div className="item-5">Concert program 5</div>
          <div className="item-6">Concert program 6</div>
          <div className="item-7">Concert program 7</div>
          <div className="item-8">Concert program 8</div>
          <div className="item-9">Concert program 9</div>
          <div className="item-10">Concert program 10</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ConcertProgramsPage
