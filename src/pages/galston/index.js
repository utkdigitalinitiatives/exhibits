import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const GalstonIndex = () => (

  <Layout exhibit="galston">
    <Seo title="Galston Studienbuch" />

    <section className="exhibits-section">
      <div>
        <div className="yith yith-comparison" id="studienbuch-comaparison" data-mode="comparison">
          <a className="yith-expand" href="#">Expand for Comparative Analysis</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
          </div>
        </div>
      </div>
      <div>
        <h2>The Studienbuch</h2>
        <p>At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy - Gottfried Galston’s Studienbuch. The exhibit features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a specially-commissioned--and previously unpublished--English translation.</p>
        <p>In his pioneering study book, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. </p>
      </div>
    </section>
    <section className="exhibits-section">
      <figure className="exhibits-blockquote">
        <blockquote>
          [Galston] tells you everything about the work, technically, musically, historically, sentimentally. He has no secrets from you.
        </blockquote>
        <figcaption>
          Leonard Liebling
        </figcaption>
      </figure>
    </section>
  </Layout>

)

export default GalstonIndex
