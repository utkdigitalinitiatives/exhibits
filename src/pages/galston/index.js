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
        <p>In this pioneering studybook, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. Widely used in German-speaking countries, the studybook is made available here for the first time with an English translation and the hope that it may contribute to music pedagogy in the U.S. and beyond.</p>
      </div>
      <div id="comparison-teaser-wrapper">
        <Yith id="studienbuch-translation"
              mode="comparison">
          <a className="yith-expand" href="#">Expand in Viewer</a>
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

    <section id="guided-tour">
      <Yith id="sample-projection" mode="projection"
            description="Explore features of UT’s unique bound volume of Galston’s <em>Studienbuch</em> (1910)">
        <a className="yith-expand" href="#">Explore the Volume</a>
        <div className="yith-structure">
          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/1">
                <figcaption>
                  <strong>The Studienbuch: Front Cover</strong>
                  <p>Front cover: the volume is three quarter bound with marbled boards.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/2">
                <figcaption>
                  <strong>The Studienbuch: Front Cover</strong>
                  <p>Front cover: the volume is three quarter bound with marbled boards.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/1">
                <figcaption>
                  <strong>The Studienbuch: Spine</strong>
                  <p>The spine has raised bands, a decorative feature. In older bindings, these would have been a result
                    of the bands of thread around the spine under the leather.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/2">
                <figcaption>
                  <strong>The Studienbuch: Spine</strong>
                  <p>The spine has raised bands, a decorative feature. In older bindings, these would have been a result
                    of the bands of thread around the spine under the leather.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/3">
                <figcaption>
                  <strong>The Studienbuch: Spine</strong>
                  <p>"""Extra ill copy""
                    Extra illustrated copy is a bookbinding term that refers to a book which has been rebound with
                    interleaving pages. This was usually for the purpose of adding illustrations to a text, but in this
                    case it is believed the intention was for Galston to provide editorial changes for the second
                    edition of the Studienbuch."</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/1">
                <figcaption>
                  <strong>The Studienbuch: Inside Cover</strong>
                  <p>The inside front cover bears the bookbinder's stamp on the lower right.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/2">
                <figcaption>
                  <strong>The Studienbuch: Inside Cover</strong>
                  <p>"K Ebert München <br/> This volume was bound by bookbinder Karl Ebert in Munich, Germany"</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/7/annotations/1">
                <figcaption>
                  <strong>The Studienbuch: Information about Printer</strong>
                  <p>The <em>Studienbuch</em> was printed by Breitkopf & Härtel in Leipzig. Founded in 1719 and still in business
                    in the 21st century, the company is the oldest music publishing house.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/1">
                <figcaption>
                  <strong>The Studienbuch: Front Cover</strong>
                  <p>This first edition of Galston's Studienbuch was published in 1910 by Bruno Cassirer, a noted art
                    publisher and gallery owner in Berlin. Cassirer's catalog was primarily art books, Galston's music
                    study book being somewhat of an exception. The two men may have known each other through mutual
                    artist friends or through the Jewish community.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/2">
                <figcaption>
                  <strong>The Studienbuch: Front Cover</strong>
                  <p>The publisher's mark at the front of the book is a decorative floral motif bearing the publisher's
                    monogram, "BC."</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/1">
                <figcaption>
                  <strong>Godowsky postcard in the Studienbuch</strong>
                  <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/galston_703.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/703/canvas/0/annotations/1">
                <figcaption>
                  <strong>Postcard from Godowsky - Address Side</strong>
                  <p>Postcard addressed to Galston's Berlin residence, postmarked 30 May 1908.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/2">
                <figcaption>
                  <strong>Godowsky postcard in the Studienbuch</strong>
                  <p>The postcard was sent to Galston from Leopold Godowsky [senior], and was written on Galston’s own stationery.
                    The note concerns Godowsky's own interpretation of Chopin's études. It reads: <br/>
                    My esteemed Mr. Galston,
                    Having just returned from a journey, I found your valued lines. I am delighted that you have taken
                    an interest in my work on the Chopin etudes. For chromatic sixths, I have only the following
                    fingering to offer:
                    With cordial greetings,
                    Your devoted
                    Leopold Godowsky
                  </p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/3">
                <figcaption>
                  <strong>Godowsky postcard in the Studienbuch</strong>
                  <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/galston_949.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/949/canvas/0/annotations/1">
                <figcaption>
                  <strong>Printed Table in Studienbuch</strong>
                  <p>Godowsky's suggestion appears in the table on page 118 of the Studienbuch.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/157/annotations/1">
                <figcaption>
                  <strong>Studienbuch: Chopin Section</strong>
                  <p>Galston makes four editorial changes in the Chopin section. These changes can be seen in the 2nd
                    edition of the Studienbuch, published in 1921.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/157/annotations/2">
                <figcaption>
                  <strong>Studienbuch: Handwritten note in Chopin Section</strong>
                  <p>"X Im übrigen gilt hier das zur fmoll Etüde (Trois nouvelles études  No 1) Angemerkte (Polyrythmik)
                    ======
                    X Otherwise what was noted (polyrhythmic) in regard to the f-minor etude (Trois nouvelles études  No 1 ) holds here."
                  </p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/161/annotations/1">
                <figcaption>
                  <strong>Studienbuch: Handwritten note in Chopin Section</strong>
                  <p>"x Vor-Parallestudium (Transponieren durch mehrere Tonarten) zum Finale des hmoll Sonate!
                    =======
                    x Pre-parallel study (transposition through several keys) to the final of the b-minor sonata!"
                  </p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/164/annotations/1">
                <figcaption>
                  <strong>Studienbuch: Handwritten note in Chopin Section</strong>
                  <p>"Dieses Studienmaterial mit den Komplexen der Etüde Op 10 No 2 amoll kombinieren. Technische Verwandtschaft
                    x x x
                    ============
                    Combine this study material with the issues related to the étude Op 10 No 2 in a-minor. Technical relationship.
                    x x x"
                  </p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/165/annotations/1">
                <figcaption>
                  <strong>Studienbuch: Handwritten note in Chopin Section</strong>
                  <p>"Die charakteristischen technischen Laufgruppen (z.B. Takte 1-2, 29-32 u.s.w.) zu fortlaufenden
                    Fingerüberungen durch alle 12 Tonarten benützen: Zur Befestigung und Ausbildung des 6 Pianistensinns
                    des Distanzgefühls (in Spannung und Sprung) .
                    x x x
                    =======
                    Use the characteristic technical runs (e.g. measures 1-2, 29-32 etc.) for extended fingering
                    practice through all 12 keys: For the development and establishment of the 6th pianistic sense of
                    distance (in tension and leap).
                    x x x"
                  </p>
                </figcaption>
              </figure>
            </div>
          </figure>

        </div>
      </Yith>
    </section>

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
        <p>Galston taught at several notable institutions in Germany and toured extensively internationally, performing in Europe, Australasia, and the United States, where he later settled and taught at the St. Louis Institute of Music. More about Galston's life and career, and the signicance of his Studienbuch in music pedagogy can be found in this exhibit.</p>
        <div className="call-to-action--wrapper">
          <div className="call-to-action"><Link to="/galston/gottfried-galston">Galston's Life & Career</Link></div>
        </div>
      </div>
    </section>
  </Layout>

)

export default GalstonIndex
