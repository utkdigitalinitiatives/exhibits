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
      <div className="music-pedagogy-wrapper">
        <div className="gift-to-musicians">
          <h2>Gift to musicians</h2>
          <p>Galston's musical interpretations established the young pianist as one of the most gifted and sensitive interpreters of his day, but his gift to the musical world was not limited to his inspired interpretations. In the spirit of scholarship and a willingness to share his musical ideas with future generations of pianists, Galston published his journey through his interpretative processes by analyzing the composers’ texts to capture, as one reviewer put it, the true character of each work, establishing his <span className="studybook">Studienbuch</span> as an unparalleled gift to musicians and pedagogues for generations to come.</p>
          <p>Galston's impetus to publish the <span className="studybook">Studienbuch</span> was his recognition of "the great value in what is said about the works of a composer, or what is inspired, felt, and expressed by these works."</p>       
        </div>
        <div className="music-pedagogy-yith">
        <Yith id="studienbuch-present-test"
            mode="present">
        <div className="yith-structure">
          <figure className="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/701"></figure>
        </div>
        </Yith>
        </div>
      </div>
    </section>



    <section className="exhibits-section">
      <figure className="exhibits-blockquote">
        <blockquote>
          [Galston] tells you everything about the work, technically, musically, historically, sentimentally. He has no secrets from you.
        </blockquote>
        <figcaption>
          Leonard Liebling (Musical Courier, July 1912)
        </figcaption>
      </figure>
    </section>

    <section className="exhibits-section">
      <div className="musical-interpretation-yith">
      <Yith id="studienbuch-present-test"
          mode="present">
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_949.json"
                data-region="1136,232,6000,3920"></figure>
      </div>
    </Yith>
      </div>
      <div className="musical-interpretation-wrapper">
        <div className="musical-interpretation">
          <h2>Musical interpretation</h2>
          <p>In the foreword to Galston’s <span className="studybook">Studienbuch</span>, the author describes the musical journey every interpreter takes when learning a new work. He explains how “every thoughtful artist experiences a whole world of emotions, forms perceptions and makes decisions, finds and defines the points of attack, discovers hidden pivotal points around which the entire work turns, secretly identifies the treacherous spots in order to be armed against them, and much more.” Galston also believed that music students would benefit from experiencing these interpretive journeys that all great artists struggled through before realizing a powerful and suitably expressive interpretation.</p>
          
          <p>In his breakthrough publication, <span className="studybook">Studienbuch</span>, Galston offers the world of piano pedagogy the first guide to teaching musical interpretation. By documenting an artist’s thought processes while examining several of the tenets of the piano literature, Galston leads his readers through the mind of an interpreter as he analyzes the various motives, phrases, and musical nuances of Bach, Beethoven, Chopin, Liszt, and Brahms. By following Galston through his own study of selected musical works, students can learn to approach a new composition more intelligently by thinking about passages in different ways and considering a multitude of options.</p>
        </div>
      </div>
    </section>


    <section className="exhibits-section confessions-wrapper">
      <div className="confessions">
        <h2>‘Confessions’</h2>
        <p>In a 1912 review of the newly published Studienbuch, Leonard Liebling described how “Gottfried Galston branches out into a new field of musico-literary endeavor, and gives a detailed record of his interpretations, with the reasons for the things he does, and the experiences and impressions undergone at the piano during his preparation of the five tremendous programs.” Liebling goes on to convey the unique value of Galston’s work by describing how, “these ‘confessions’ of Galston are to me the most interesting notes ever published on the art of piano playing, and if Liszt and Rubinstein had possessed sufficient moral courage to be as candid with their contemporaries as Galston is with his twentieth century confreres, the two masters would have left behind them a far truer picture of themselves and of their art than is contained in the newspapers of their day and in the books written about them by others.” </p>
      </div>
      <div>
        <div>
        <Yith id="studienbuch-present-test"
          mode="present">
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/948"></figure>
      </div>
    </Yith>
        </div>
      </div>
    </section>
  </Layout>
)

export default StudienbuchPage
