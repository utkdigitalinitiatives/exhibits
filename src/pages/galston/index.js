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
        <Yith mode="comparison">
          <a className="yith-expand" href="#">Expand for Comparative Analysis</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
          </div>
        </Yith>
        <p>At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy - <Link to="/galston/studienbuch" activeClassName="active">Gottfried Galston’s Studienbuch</Link>. The exhibit features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a specially-commissioned--and previously unpublished--English translation.</p>
        <p>In his pioneering study book, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. </p>
      </div>
      <div>
        <div className="yith yith-comparison" id="studienbuch-comparison-3" data-mode="comparison">
          <a className="yith-expand" href="#">A Look Inside</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"></figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498"></figure>
          </div>
        </div>
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

    <section className="exhibits-section">
      <div>
      </div>
      <div>
        <h2>Gottfried Galston</h2>
        <p>Donec eu nibh neque. Duis bibendum leo vitae est fermentum, id tristique dolor vulputate. <Link to="/galston/gottfried-galston" activeClassName="active">Morbi id est elementum</Link>, bibendum felis vel, venenatis metus. Donec interdum, lorem sit amet cursus blandit, nisi purus consequat est, lacinia ultricies leo enim eget felis. Aenean ut enim elit. Praesent eget ipsum accumsan, egestas enim a, ullamcorper mi. Etiam eget lectus in erat tincidunt eleifend.</p>
        <p>Nam gravida elit risus, aliquam tempus odio pulvinar eu. Donec nec erat nisl. Duis finibus rutrum metus id semper. Pellentesque pellentesque est id mauris pulvinar cursus. Aenean finibus ullamcorper diam eu convallis. </p>
      </div>
    </section>
  </Layout>

)

export default GalstonIndex
