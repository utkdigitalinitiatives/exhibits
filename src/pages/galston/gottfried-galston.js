import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonPage = () => (
  <Layout exhibit="galston">
    <Seo title="Gottfried Galston" />

    <section className="exhibits-section">
      <div>
        <h2>Gottfied Galston, 1879-1950</h2>
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
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/680"
              data-autozoom="true"
              data-region="0,0,500,500"
            ></figure>
          </div>
        </Yith>
      </div>
    </section>
    <Yith id="studienbuch-chronology" mode="chronology" description="The life and career of Gottfried Galston">
      <div className="yith-structure">
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/684"
          data-label="1879"
        >Gottfried Galston was born in Vienna in 1879. His musical training began in early childhood under the supervision of his governesses. By the time he was seven, he began private lessons with various teachers in Vienna, including Professor Schenner at the Vienna Conservatory. At high school in 1894, Galston began lessons with Theodor Leschetizky, one the most influential piano teachers of the time, and his assistant, Malwine Bree.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"
          data-label="1900"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"
          data-label="1903"
          data-region="1338,1238,2902,3479"
          data-autozoom="true"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/700"
          data-label="1905"
          data-region="2450,1400,3000,2300"
          data-autozoom="true"
        ></figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694"
          data-label="1907"
          data-region="2168,729,3947,2732"
          data-autozoom="true"
        ></figure>
      </div>
    </Yith>
  </Layout>
)

export default GalstonPage
