import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const Chronology = () => (

  <Layout exhibit="sample">
    <Seo title="Chronology: Sample Exhibit" />

    <section className="exhibits-section">
      <div>
        <h2>Tennessee, The Early Years</h2>
        <p>
          At the heart of this exhibit is a unique, bound volume of a
          groundbreaking publication in music pedagogy -{" "}
          <Link to="/galston/studienbuch" activeClassName="active">
            Gottfried Galston’s Studienbuch
          </Link>
          . The exhibit features the first edition of the Austrian-born
          pianist’s German-language book (1910), accompanied by a
          specially-commissioned--and previously unpublished--English
          translation.
        </p>
        <p>
          In his pioneering study book, Galston provides a thorough record of
          his thought processes and musical interpretations for the works of
          five composers - Bach, Beethoven, Liszt, Brahms, and Chopin.{" "}
        </p>
      </div>
      <div>
        <Yith id="galston-intro" mode="present">
          <div className="yith-structure">
            <figure
              className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/390"
            ></figure>
          </div>
        </Yith>
      </div>
    </section>
    <Yith id="studienbuch-chronology" mode="chronology" description="An untold story and the humble origins of Knoxville, Tennessee.">
      <div className="yith-structure">
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/376"
          data-label="A Beginning"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/343"
          data-label="Emergence"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/410"
          data-label="Turn of the Century"
          data-region="1338,1238,2902,3479"
          data-autozoom="true"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/375"
          data-label="Transition"
          data-region="2450,1400,3000,2300"
          data-autozoom="true"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/309"
          data-label="The Demise"
          data-region="2168,729,3947,2732"
          data-autozoom="true"
        ></figure>
      </div>
    </Yith>

  </Layout>

)

export default Chronology
