import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const Present = () => (
  <Layout exhibit="sample">
    <Seo title="Present: Sample Exhibit" />

    <section className="exhibits-section">
      <div>
        <h2>Knoxville, The Early Years</h2>
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
      <div>
        <Yith id="sample-present-1" mode="present">
          <div className="yith-structure">
            <figure
              className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/474"
              data-region="252,263,3556,2157"
            ></figure>
          </div>
        </Yith>
      </div>
    </section>

    <section className="exhibits-section">
      <div>
        <Yith id="sample-present-2" mode="present">
          <div className="yith-structure">
            <figure
              className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/467"
            ></figure>
          </div>
        </Yith>
      </div>
      <div>
        <h2>Tennessee River</h2>
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

export default Present
