import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StudienbuchPage = () => (
  <Layout>
    <Seo title="Guided Tour" />
    <h1>The Studienbuch</h1>
    <div className="yith yith-projection" id="stuidenbuch-projection" data-mode="projection">
      <a className="yith-expand" href="#">Studienbuch</a>
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <figcaption>
            <strong>Galston</strong>
            <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin
              ipsum quam a nibh. Nullam et accumsan ligula.</p>
          </figcaption>
          <div className="yith-items">
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/1">
              <figcaption>
                <strong>The Studienbuch</strong>
                <p>Purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin ipsum quam a
                  nibh.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694">
          <figcaption>
            <strong>Galston</strong>
            <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin
              ipsum quam a nibh. Nullam et accumsan ligula.</p>
          </figcaption>
        </figure>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <div className="yith-items">
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/7/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure className="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703">
          <figcaption>
            <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </Layout>
)

export default StudienbuchPage
