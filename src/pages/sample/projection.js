import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const Projection = () => (
  <Layout exhibit="sample">
    <Seo title="Projection: Sample Exhibit" />

    <Yith
      id="sample-projection"
      mode="projection"
      description="Curabitur ut pellentesque metus, nisi 1865 at 1932 pretium odio."
    >
      <a className="yith-expand" href="#">
        Tour of Knoxville
      </a>
      <div className="yith-structure">
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/482"
        >
          <p>
            Duis finibus dui lectus, id aliquam dolor ornare eu. Curabitur ut
            pellentesque nisi, at pretium odio.
          </p>
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/449"
        >
          <p>Cras condimentum ornare velit, nec malesuada augue efficitur a.</p>
        </figure>
      </div>
    </Yith>
  </Layout>
)

export default Projection
