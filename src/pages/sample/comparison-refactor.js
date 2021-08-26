import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ComparisonRefactor = () => (
  <Layout exhibit="sample">
    <Seo title="Comparison: Sample Exhibit" />

    <section className="exhibits-section">
      <div>
        <Yith id="concert-programs-comparison-1"
              mode="comparison">
          <a className="yith-expand" href="#">October 12, 1919</a>
          <div className="yith-structure">
            <figure class="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/1"
                    data-region="98,760,3198,4511"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/1/canvas/8"></figure>
            <figure class="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch.json">
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
      </div>
      <div>
        <h2>Tourism and Commerce</h2>
        <p>
          Sed vitae dui ut urna suscipit lobortis id ac magna. Donec velit ex,
          dapibus a maximus vel, feugiat vel lacus. Maecenas maximus, lorem in
          aliquet ultricies, nisi metus tincidunt ligula, eget viverra massa
          metus at sapien. Ut ullamcorper id mauris luctus maximus. Nulla
          maximus lectus dui. Phasellus blandit tristique sem. Etiam et ex vel
          metus mattis rutrum.
        </p>
        <p>
          Cras condimentum ornare velit, nec malesuada augue efficitur a. Donec
          mi orci, eleifend eget laoreet sit amet, consectetur in quam. Vivamus
          eleifend nunc nec ante porta, et consequat est semper. Aliquam
          ullamcorper dui quis diam mollis, sed posuere est efficitur.
        </p>
        <p>
          Duis finibus dui lectus, id aliquam dolor ornare eu. Curabitur ut
          pellentesque nisi, at pretium odio.
        </p>
      </div>
    </section>
  </Layout>
)

export default ComparisonRefactor
