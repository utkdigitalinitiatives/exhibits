import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"
import UTKLogo from "../../media/utk-logo.png";

const ConcertProgramsPage = () => {
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
    const description = "At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy - Gottfried Galston’s Studienbuch. The exhibit features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a specially-commissioned--and previously unpublished--English translation. The bound volume includes several editorial changes -- handwritten by Galston -- later incorporated into the book's 2nd edition (1922).\nIn this pioneering studybook, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. Widely used in German-speaking countries, the studybook is made available here for the first time with an English translation and the hope that it may contribute to music pedagogy in the U.S. and beyond"
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Galston Studienbuch Exhibit",
        "url": "https://exhibits.lib.utk.edu/galston",
        "description": description,
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
        "logo": UTKLogo
      }
    ]
  return (
      <Layout exhibit="galston">
        <Seo title="Gottfried Galston Concert Programs" schemaMarkup={schema}/>
        <h1>Concert Programs</h1>
        <div>
          <div className="concert-programs-flex">
            <div className="concert-programs-description">
              <p>In Munich, between October 1919 and February 1921, Galston performed, from memory, a series of over 40
                recitals. The performances encompassed an impressive representation of works by the most celebrated
                composers as well as works by Galston's contemporaries. The concert programs state that the entirety of
                significant piano literature from the beginning to the present is covered by these 40 concerts. By the end
                of the series, Galston had performed over 200 works in just over 70 weeks. </p>
              <p>This volume of individual printed programs was likely bound especially for Galston, and bears his “Ex
                Libris” plate on the inside front cover. The composers and works detailed in this volume match the list of
                concerts written in Galston's hand at the end of the <span class="studybook">Studienbuch</span>. These
                handwritten lists include a few additional details, for example, about arrangers, but it is not known why
                Galston transcribed the concert series in detail at the back of the <span
                    class="studybook">Studienbuch</span> bound volume; the list was not included in subsequent editions of
                the <span class="studybook">Studienbuch</span>.
              </p>
            </div>
          </div>
          <div className="comparison-grid">
            <Yith id="concert-programs-comparison-1"
                  mode="comparison">
              <a className="yith-expand" href="#">October 12, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="98,760,3198,4511"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/8"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/1">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>
            <Yith id="concert-programs-comparison-2"
                  mode="comparison">
              <a className="yith-expand" href="#">October 19, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="304,768,5008,6640"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/14"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/2">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>
            <Yith id="concert-programs-comparison-3"
                  mode="comparison">
              <a className="yith-expand" href="#">October 26, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="432,608,4944,6784"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/18"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/3">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>
            <Yith id="concert-programs-comparison-4"
                  mode="comparison">
              <a className="yith-expand" href="#">November 2, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="320,600,4992,6816"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/22"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/4">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-5"
                  mode="comparison">
              <a className="yith-expand" href="#">November 9, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="344,336,5168,7312"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/26"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/5">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-6"
                  mode="comparison">
              <a className="yith-expand" href="#">November 16, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="368,608,4912,6848"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/30"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/6">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-7"
                  mode="comparison">
              <a className="yith-expand" href="#">November 23, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="176,552,4880,6896"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/34"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/7">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-8"
                  mode="comparison">
              <a className="yith-expand" href="#">November 30, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="256,496,4864,6800"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/38"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/477/annotations/8">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-9"
                  mode="comparison">
              <a className="yith-expand" href="#">December 7, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="264,528,4816,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/42"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/1">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-10"
                  mode="comparison">
              <a className="yith-expand" href="#">December 14, 1919</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="312,464,4800,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/46"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/2">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-11"
                  mode="comparison">
              <a className="yith-expand" href="#">January 4, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="232,512,4880,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/50"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/3">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-12"
                  mode="comparison">
              <a className="yith-expand" href="#">January 11, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="256,552,4896,6688"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/54"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/4">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-13"
                  mode="comparison">
              <a className="yith-expand" href="#">January 18, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="392,512,4816,6672"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/58"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/5">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-14"
                  mode="comparison">
              <a className="yith-expand" href="#">January 25, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="312,624,4848,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/62"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/6">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-15"
                  mode="comparison">
              <a className="yith-expand" href="#">February 1, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="312,584,4832,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/66"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/7">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-16"
                  mode="comparison">
              <a className="yith-expand" href="#">February 8, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="88,616,4848,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/70"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure className="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/8">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-17"
                  mode="comparison">
              <a className="yith-expand" href="#">February 15, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="288,608,4848,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/74"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/9">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-18"
                  mode="comparison">
              <a className="yith-expand" href="#">February 22, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="312,648,4864,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/78"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/478/annotations/10">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-19"
                  mode="comparison">
              <a className="yith-expand" href="#">February 29, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,632,4848,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/82"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/1">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-20"
                  mode="comparison">
              <a className="yith-expand" href="#">March 7, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,632,4848,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/86"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/2">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-21"
                  mode="comparison">
              <a className="yith-expand" href="#">March 14, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="376,600,4912,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/90"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/3">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-22"
                  mode="comparison">
              <a className="yith-expand" href="#">March 21, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,1128,4752,5872"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/94"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/4">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-23"
                  mode="comparison">
              <a className="yith-expand" href="#">March 28, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,1128,4752,5872"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/98"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/5">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-24"
                  mode="comparison">
              <a className="yith-expand" href="#">April 4, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="168,592,4896,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/102"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/6">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-25"
                  mode="comparison">
              <a className="yith-expand" href="#">April 11, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="280,616,4912,6672"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/106"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/7">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-26"
                  mode="comparison">
              <a className="yith-expand" href="#">April 18, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="304,664,4864,6688"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/110"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/479/annotations/8">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-27"
                  mode="comparison">
              <a className="yith-expand" href="#">April 25, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="263,623,4685,6746"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/114"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/1">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-28"
                  mode="comparison">
              <a className="yith-expand" href="#">May 2, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="440,680,4800,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/118"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/2">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-29"
                  mode="comparison">
              <a className="yith-expand" href="#">May 9, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="392,552,4896,6656"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/122"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/3">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-30"
                  mode="comparison">
              <a className="yith-expand" href="#">May 16, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="368,616,4832,6672"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/126"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/4">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-31"
                  mode="comparison">
              <a className="yith-expand" href="#">September 12, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="264,536,4896,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/130"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/5">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-32"
                  mode="comparison">
              <a className="yith-expand" href="#">September 26, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="224,584,4912,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/134"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/6">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-33"
                  mode="comparison">
              <a className="yith-expand" href="#">October 10, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="352,560,4864,6720"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/138"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/7">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-34"
                  mode="comparison">
              <a className="yith-expand" href="#">October 31, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,528,4880,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/142"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/480/annotations/8">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-35"
                  mode="comparison">
              <a className="yith-expand" href="#">November 21, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="304,680,4880,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/146"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/1">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-36"
                  mode="comparison">
              <a className="yith-expand" href="#">December 5, 1920</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="296,528,4864,6768"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/150"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/2">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-37"
                  mode="comparison">
              <a className="yith-expand" href="#">January 16, 1921</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="552,576,4832,6640"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/154"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/3">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-38"
                  mode="comparison">
              <a className="yith-expand" href="#">January 30, 1921</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="448,704,4880,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/158"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/4">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-39"
                  mode="comparison">
              <a className="yith-expand" href="#">February 13, 1921</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="344,640,4864,6704"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/162"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/5">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>

            <Yith id="concert-programs-comparison-40"
                  mode="comparison">
              <a className="yith-expand" href="#">February 20, 1921</a>
              <div className="yith-structure">
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                        data-region="312,608,4864,6736"
                        data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/166"></figure>
                <figure class="yith-manifest"
                        data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch_not_paged.json">
                  <div class="yith-items">
                    <figure class="yith-annotation"
                            data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/481/annotations/6">
                      <figcaption>
                        <strong>string</strong>
                        <p>string</p>
                      </figcaption>
                    </figure>
                  </div>
                </figure>
              </div>
            </Yith>
          </div>
        </div>
      </Layout>
  )
}

export default ConcertProgramsPage
