import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"
import UTKLogo from "../../media/utk-logo.png"

const GalstonIndex = () => {
  const {site} = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Galston Studienbuch Exhibit",
      "url": "https://exhibits.lib.utk.edu/galston",
      "description": site.siteMetadata.description,
      "producer": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "University of Tennessee, Knoxville. Libraries",
        "url": "https://www.lib.utk.edu/",
        "sameAs": [
          "https://twitter.com/utklibraries",
          "http://id.loc.gov/authorities/names/n87808088",
        ],
        "logo": UTKLogo
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "University of Tennessee, Knoxville. Libraries",
      "url": "https://www.lib.utk.edu/",
      "sameAs": [
        "https://twitter.com/utklibraries",
        "http://id.loc.gov/authorities/names/n87808088",
      ],
      "description": site.siteMetadata.description,
      "logo": UTKLogo
    }
  ]

return (

  <Layout exhibit="galston">
    <Seo title="Galston Studienbuch" schemaMarkup={schema}/>
    <section className="exhibits-section">
      <div>
        <h2>The Studienbuch</h2>
        <p>At the heart of this exhibit is a unique bound volume of a groundbreaking publication in music pedagogy, Gottfried Galston's <span className="studybook">Studienbuch</span>. The exhibit features the first edition of the Austrian-born pianist's German-language book (1910), accompanied by a specially-commissioned, and previously unpublished, English translation. The bound volume includes several editorial changes, handwritten by Galston, and later incorporated into the book's second edition, which was published in the 1920s in five separate sections.</p>
        
        <p>In this pioneering studybook, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Chopin, Liszt, and Brahms. Widely used in German-speaking countries, the studybook is made available here for the first time with an English translation, and with the hope that it may contribute to music pedagogy in the U.S. and beyond.</p>
      </div>
      <div id="comparison-teaser-wrapper">
        <Yith id="studienbuch-translation"
              mode="comparison">
          <button className="yith-expand">Expand in Viewer</button>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/static/iiif/galston_178.json"
                    data-region="525,1616,3120,2496"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10">>
            </figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/static/iiif/galston_736.json"></figure>
          </div>
        </Yith>
      </div>
    </section>

    <section id="guided-tour">
      <Yith id="sample-projection" mode="projection"
            description="Explore features of UT's unique bound volume of Galston's <em>Studienbuch</em> (1910)">
        <button className="yith-expand">Explore the Volume</button>
        <div className="yith-structure">
          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/1">
                <figcaption>
                  <strong>Front cover of bound volume</strong>
                  <p>The volume is three quarter bound with marbled boards.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/2">
                <figcaption>
                  <strong>Front cover of bound volume</strong>
                  <p>The volume is three quarter bound with marbled boards.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/1">
                <figcaption>
                  <strong>Spine of bound volume</strong>
                  <p>The spine has raised bands, a decorative feature. In older bindings, these would have been a result
                    of the bands of thread around the spine under the leather.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/2">
                <figcaption>
                  <strong>Spine of bound volume</strong>
                  <p>The spine has raised bands, a decorative feature. In older bindings, these would have been a result
                    of the bands of thread around the spine under the leather.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/3">
                <figcaption>
                  <strong>Extra ill copy</strong>
                  <p>Extra illustrated copy is a bookbinding term that refers to a book which has been rebound with
                    interleaving pages. This was usually for the purpose of adding illustrations to a text, but in this
                    case it is believed the intention was for Galston to provide editorial changes for the second
                    edition of the Studienbuch.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/1">
                <figcaption>
                  <strong>Inside cover of bound volume</strong>
                  <p>The inside front cover bears the bookbinder's stamp on the lower right.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/2">
                <figcaption>
                  <strong>Bookbinder's stamp</strong>
                  <p>"K Ebert München.</p><p>This volume was bound by bookbinder Karl Ebert in Munich, Germany"</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/kebert.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/static/iiif/kebert/annotations/1">
                <figcaption>
                  <strong>Advertisement from 1917</strong>
                  <p>"An advertisement for Karl Ebert's bookbinding services in Munich, Germany.</p>
                  <p>From the Zeitschrift für bücherfreunde. ser. 2 v. 9:1, digitized by University of California, via HathiTrust.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/7/annotations/1">
                <figcaption>
                  <strong>Printers</strong>
                  <p>The Studienbuch was printed by Breitkopf &amp; Härtel in Leipzig. Founded in 1719 and still in business
                    in the 21st century, the company is the oldest music publishing house.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/1">
                <figcaption>
                  <strong>The Studienbuch front cover</strong>
                  <p>This first edition of Galston's Studienbuch was published in 1910 by Bruno Cassirer, a noted art
                    publisher and gallery owner in Berlin. Cassirer's catalog was primarily art books, Galston's music
                    study book being somewhat of an exception. The two men may have known each other through mutual
                    artist friends or through the Jewish community.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/2">
                <figcaption>
                  <strong>Publisher's mark</strong>
                  <p>The publisher's mark at the front of the book is a decorative floral motif bearing the publisher's
                    monogram, "BC."</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/1">
                <figcaption>
                  <strong>Postcard stuck in the Studienbuch</strong>
                  <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
                </figcaption>
              </figure>
              <figure className="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/2">
                <figcaption>
                  <strong>Postcard - message from Godowsky</strong>
                  <p>The postcard was sent to Galston from Leopold Godowsky [senior], and was written on Galston's own
                    stationery.
                    The note concerns Godowsky's own interpretation of Chopin's études. It reads:</p>
                  <p>My esteemed Mr. Galston,</p>
                  <p>Having just returned from a journey, I found your valued lines. I am delighted that you have taken
                    an interest in my work on the Chopin etudes. For chromatic sixths, I have only the following</p>
                  <p>fingering to offer:</p>
                  <p>With cordial greetings,</p>
                  <p>Your devoted</p>
                  <p>Leopold Godowsky</p>
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
                  <strong>Postcard - address side</strong>
                  <p>The postcard is addressed to Galston's Berlin residence, postmarked 30 May 1908.</p>
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
                  <strong>Table in the Studienbuch</strong>
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
                  <strong>The Studienbuch - Chopin section</strong>
                  <p>Galston makes four editorial changes in the Chopin section. These changes can be seen in the 2nd
                    edition of the Studienbuch, published in 1921.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/157/annotations/3">
                <figcaption>
                  <strong>Handwritten note in Chopin section</strong>
                  <p>Transcription:</p>
                  <p>Im übrigen gilt hier das zur fmoll Etüde (Trois nouvelles études  No 1) Angemerkte (Polyrythmik)</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/161/annotations/2">
                <figcaption>
                  <strong>Handwritten note in Chopin section</strong>
                  <p>Transcription:</p>
                  <p>Vor-Parallestudium (Transponieren durch mehrere Tonarten) zum Finale des hmoll Sonate!</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/164/annotations/2">
                <figcaption>
                  <strong>Handwritten note in Chopin section</strong>
                  <p>Transcription:</p>
                  <p>Dieses Studienmaterial mit den Komplexen der Etüde Op 10 No 2 amoll kombinieren. Technische Verwandtschaft</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/165/annotations/2">
                <figcaption>
                  <strong>Handwritten note in Chopin section</strong>
                  <p>Transcription:</p>
                  <p>Die charakteristischen technischen Laufgruppen (z.B. Takte 1-2, 29-32 u.s.w.) zu fortlaufenden
                    Fingerüberungen durch alle 12 Tonarten benützen: Zur Befestigung und Ausbildung des 6 Pianistensinns
                    des Distanzgefühls (in Spannung und Sprung).</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/467/annotations/1">
                <figcaption>
                  <strong>Tailpiece</strong>
                  <p>This tailpiece is printed at the end of the Studienbuch, and also appears in other publications by
                    Bruno Cassirer.</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/467/annotations/2">
                <figcaption>
                  <strong>Tailpiece</strong>
                  <p>The motif depicts a man with a walking stick and carrying a basket on his back.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/schreitender-bauer.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/static/iiif/schreitender-bauer/annotations/1">
                <figcaption>
                  <strong>Schreitender Bauer</strong>
                  <p>The sketch appears to be related to works by Max Liebermann, Schreitender Bauer - Striding Farmer - painted between 1894-99.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                  data-manifest="https://digital.lib.utk.edu/static/iiif/max-liebermann-vor-dem-gemalde-schreitender-bauer-1894.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/static/iiif/max-liebermann-vor-dem-gemalde-schreitender-bauer-1894/annotations/1">
                <figcaption>
                  <strong>Max Liebermann</strong>
                  <p>Liebermann, shown painting a similar piece in this photograph, was also the subject of books published by Bruno Cassirer.</p>
                </figcaption>
              </figure>
            </div>
          </figure>

          <figure class="yith-manifest"
                      data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged_tour.json">
            <div class="yith-items">
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/468/annotations/1">
                <figcaption>
                  <strong>Busoni on Liszt</strong>
                  <p>This handwritten note by Galston's friend and fellow pianist, Ferruccio Busoni, is described in Pauline Shaw Bayne's book, The Gottfried Galston Music Collection and the Galston-Busoni Archive, as "Busoni's "Aphorism" on Liszt."</p>
                </figcaption>
              </figure>
              <figure class="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/443/annotations/1">
                <figcaption>
                  <strong>The Studienbuch - Appendix</strong>
                  <p>Busoni's piece appears on page 210 in the Studienbuch's Appendices (Anhang). It was also published
                    in Ferruccio Busoni's 1922 book, Von der Einheit der Musik (Of the Unity of Music). and was
                    reportedly included in Busoni's Zurich program of April 1916.</p>
                </figcaption>
              </figure>
              <figure className="yith-annotation"
                      data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/9">
                <figcaption>
                  <strong>Concert recitals</strong>
                  <p>The last few pages of this unique volume contain lists, handwritten by Galston, of the 40 concerts
                    he performed between 1919 and 1921. The printed programs for the 40 concert cycle are included in
                    this digital exhibit.</p>
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
                    data-manifest="https://digital.lib.utk.edu/static/iiif/galston_694.json"></figure>
          </div>
        </Yith>
      </div>
      <div>
        <h2>Gottfried Galston</h2>
        <p>A preeminent concert pianist of the early twentieth century, Gottfried Galston (1879-1950) studied with leading pedagogues in Austria and Germany before embarking on a career distinguished not only by his virtuosic performances but also by an innovative and insightful approach to piano pedagogy. His remarkable series of concert performances enthralled audiences around the world and were highly acclaimed by critics with the highest of praise: "[H]is superb playing [...] has been thoroughly artistic, without even being dry or pedantic, exquisite in tone, and well nigh perfect in technique." (<span className="studybook">Daily Telegraph</span>, London, February 22, 1907) Galston's Studienbuch received an equally acclamatory response: "Galston's tremendous intellectual and musical grasp is evidenced throughout his book" (<span className="studybook">Musical Courier</span>, July 3, 1912)</p>

        <p>Galston taught at several notable institutions in Germany and toured extensively internationally, performing in Europe, Australasia, and the United States, where he later settled and taught at the St. Louis Institute of Music. More about Galston's life and career, and the significance of his <span className="studybook">Studienbuch</span> in music pedagogy can be found in this exhibit.</p>
        <div className="call-to-action--wrapper">
          <div className="call-to-action"><Link to="/galston/gottfried-galston">Galston's Life &amp; Career</Link></div>
        </div>
      </div>
    </section>
  </Layout>

)}

export default GalstonIndex
