import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonIndex = () => (

  <Layout exhibit="galston">
    <Seo title="Galston Studienbuch" />

    <section className="exhibits-section">
      <div>
        <h2>The Studienbuch</h2>
        <p>At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy - <Link to="/galston/studienbuch" activeClassName="active">Gottfried Galston’s <span className="studybook">Studienbuch</span></Link>. The exhibit features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a specially-commissioned--and previously unpublished--English translation. The bound volume includes several editorial changes -- handwritten by Galston -- later incorporated into the book's 2nd edition (1922).</p>
        <p>In this pioneering studybook, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. Widely used in German-speaking countries, the studybook is made available here for the first time with an English translation and the hope that it may contribute to music pedagogy in the U.S. and beyond. </p>
      </div>
      <div>
        <Yith id="studienbuch-translation"
              mode="comparison">
          <a className="yith-expand" href="#">Explore the Volume</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-region="525,1616,3120,2496"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10">>
            </figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
          </div>
        </Yith>
      </div>
    </section>

    <Yith id="sample-projection" mode="projection"
          description="Explore features of UT’s unique bound volume of Galston’s <em>Studienbuch</em> (1910)">
      <a className="yith-expand" href="#">Explore Features</a>
      <div className="yith-structure">
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <div class="yith-items">
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/1">
              <figcaption>
                <strong>The Studienbuch</strong>
                <p>Purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin ipsum quam a
                  nibh.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694">
          <figcaption>
            <strong>Galston</strong>
            <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin
              ipsum quam a nibh. Nullam et accumsan ligula.</p>
          </figcaption>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <div class="yith-items">
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/7/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703">
          <figcaption>
            <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
          </figcaption>
        </figure>
      </div>
    </Yith>

    <section className="exhibits-section">
      <div className="bio-figure">
        <Yith id="galston-bio"
              mode="present">
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694"></figure>
          </div>
        </Yith>
      </div>
      <div>
        <h2>Gottfried Galston</h2>
        <p>A preeminent concert pianist of the early twentieth century,  <Link to="/galston/gottfried-galston" activeClassName="active">Gottfried Galston (1879-1950)</Link> studied with leading pedagogues in Austria and Germany before embarking on a career distinguished not only by his virtuosic performances, but also by an innovative and insightful approach to piano pedagogy. His remarkable series of concert performances enthralled audiences around the world and were highly acclaimed by critics with the highest of praise, "[...] his superb playing [...] has been thoroughly artistic, without even being dry or pedantic, exquitite in tone, and well nigh perfect in technique." (Daily Telegraph, London, February 22, 1907) Galston's Studienbuch received an equally acclamatory response, "Galston's tremendous intellectual and musical grasp is evidenced this book [...]" (Musical Courier, July 3, 1912)</p>
        <p>Galston taught at several notable institutions in Germany and toured extensively internationally, performing in Europe, Australasia, and the United States, where he later settled and taught at the St. Louis Institute of Music.</p>
        <div className="call-to-action"><Link to="/galston/gottfried-galston">Life and Career</Link></div>
      </div>
    </section>
  </Layout>

)

export default GalstonIndex
