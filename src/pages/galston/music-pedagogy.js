import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const StudienbuchPage = () => (
  <Layout exhibit="galston">
    <Seo title="Guided Tour" />
    <h1>Significance of the book in music pedagogy</h1>
    <section className="exhibits-section">
      <div>
        <h2>Lipsum lorem</h2>
        <p>Galston’s musical interpretations established the young pianist as one of the most gifted and sensitive interpreters of his day, but his gift to the musical world during this time was not limited to his inspired interpretations. In the spirit of scholarship and a willingness to share his musical ideas with future generations of pianists, Galston published his journey through his interpretative processes by analyzing the composers’ texts to capture, as one reviewer put it, the true character of each work. Therein lies the birth of Studienbuch, Galston's unparalleled gift to musicians and pedagogues for generations to come. </p>
      </div>
      <div>
        <div>
          <div className="yith yith-comparison" id="studienbuch-comaparison" data-mode="comparison">
            <a className="yith-expand" href="#">Galston</a>
            <div className="yith-structure">
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/103"></figure>
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/104"></figure>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="exhibits-section">
      <div>
        <div>
          <div className="yith yith-comparison" id="studienbuch-comaparison" data-mode="comparison">
            <a className="yith-expand" href="#">Galston</a>
            <div className="yith-structure">
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/173"></figure>
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/174"></figure>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Lipsum lorem</h2>
        <p>In the foreword to Galston’s Studienbuch, the author describes the musical journey every interpreter takes when learning a new work. He explains how “every thoughtful artist experiences a whole world of emotions, forms perceptions and makes decisions, finds and defines the points of attack, discovers hidden pivotal points around which the entire work turns, secretly identifies the treacherous spots in order to be armed against them, and much more.” Galston also believed that music students would benefit from experiencing these interpretive journeys that all great artists struggled through before realizing a powerful and suitably expressive interpretation. In his breakthrough publication, Studienbuch, Galston offers the world of piano pedagogy the first guide to teaching musical interpretation. By documenting an artist’s thought processes while examining several of the tenets of the piano literature, Galston leads his readers through the mind of an interpreter as he analyzes the various motives, phrases, and musical nuances of Bach, Beethoven, Chopin, Liszt, and Brahms. By following Galston through his own study of selected musical works, students can learn to approach a new composition more intelligently by thinking about passages in different ways and considering a multitude of options. </p>
      </div>
    </section>


    <section className="exhibits-section">
      <div>
        <h2>‘Confessions’</h2>
        <p>In a 1912 review of the newly published Studienbuch, Leonard Liebling described how “Gottfried Galston branches out into a new field of musico-literary endeavor, and gives a detailed record of his interpretations, with the reasons for the things he does, and the experiences and impressions undergone at the piano during his preparation of the five tremendous programs.” Liebling goes on to convey the unique value of Galston’s work by describing how, “these ‘confessions’ of Galston are to me the most interesting notes ever published on the art of piano playing, and if Liszt and Rubinstein had possessed sufficient moral courage to be as candid with their contemporaries as Galston is with his twentieth century confreres, the two masters would have left behind them a far truer picture of themselves and of their art than is contained in the newspapers of their day and in the books written about them by others.” </p>
      </div>
      <div>
        <div>
          <div className="yith yith-comparison" id="studienbuch-comaparison" data-mode="comparison">
            <a className="yith-expand" href="#">Galston</a>
            <div className="yith-structure">
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/153"></figure>
              <figure className="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                      data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/154"></figure>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default StudienbuchPage
