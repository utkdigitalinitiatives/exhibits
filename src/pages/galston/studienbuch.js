import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const StudienbuchPage = () => (
  <Layout exhibit="galston">
    <Seo title="Guided Tour" />
    <h1>The Studienbuch</h1>
    <section className="exhibits-section">
      <div>
      <p>Galston’s musical interpretations established the young pianist as one of the most gifted and sensitive interpreters of his day, but his gift to the musical world during this time was not limited to his inspired interpretations. In the spirit of scholarship and a willingness to share his musical ideas with future generations of pianists, Galston published his journey through his interpretative processes by analyzing the composers’ texts to capture, as one reviewer put it, the true character of each work. Therein lies the birth of Studienbuch, Galston's unparalleled gift to musicians and pedagogues for generations to come. </p>
      <p>The programs in this volume can be compared with the handwritten lists of each concert that Galston wrote in the back of the Studienbuch bound volume.</p>
      </div>
      <div></div>
    </section>

    <section className="exhibits-section">
      <div>
        <p>In the foreword to Galston’s Studienbuch, the author describes the musical journey every interpreter takes when learning a new work. He explains how “every thoughtful artist experiences a whole world of emotions, forms perceptions and makes decisions, finds and defines the points of attack, discovers hidden pivotal points around which the entire work turns, secretly identifies the treacherous spots in order to be armed against them, and much more.” Galston also believed that music students would benefit from experiencing these interpretive journeys that all great artists struggled through before realizing a powerful and suitably expressive interpretation. In his breakthrough publication, Studienbuch, Galston offers the world of piano pedagogy the first guide to teaching musical interpretation. By documenting an artist’s thought processes while examining several of the tenets of the piano literature, Galston leads his readers through the mind of an interpreter as he analyzes the various motives, phrases, and musical nuances of Bach, Beethoven, Chopin, Liszt, and Brahms. By following Galston through his own study of selected musical works, students can learn to approach a new composition more intelligently by thinking about passages in different ways and considering a multitude of options.   </p>
      </div>
      <div>
        <div className="yith yith-comparison" id="studienbuch-comparison-3" data-mode="comparison">
          <a className="yith-expand" href="#">Foreword to The Studienbuch</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/21"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/22"></figure>
          </div>
        </div>
      </div>
    </section>
    <p>&nbsp;</p>
    <section className="exhibits-section">
      <div>
        <h2>The English Translation</h2>
        <p>Galston’s musical interpretations established the young pianist as one of the most gifted and sensitive interpreters of his day, but his gift to the musical world during this time was not limited to his inspired interpretations. In the spirit of scholarship and a willingness to share his musical ideas with future generations of pianists, Galston published his journey through his interpretative processes by analyzing the composers’ texts to capture, as one reviewer put it, the true character of each work. Therein lies the birth of Studienbuch, Galston's unparalleled gift to musicians and pedagogues for generations to come. </p>
        <p>The programs in this volume can be compared with the handwritten lists of each concert that Galston wrote in the back of the Studienbuch bound volume.</p>
      </div>
      <div>
        <div className="yith yith-comparison" id="studienbuch-comaparison" data-mode="comparison">
          <a className="yith-expand" href="#">View English Translation</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default StudienbuchPage
