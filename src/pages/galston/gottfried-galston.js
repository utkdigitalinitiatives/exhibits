import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonPage = () => (
  <Layout exhibit="galston">
    <Seo title="Gottfried Galston" />

    <Yith id="studienbuch-chronology"
          mode="chronology">
			<div className="yith-structure">
				<figure className="yith-manifest"
								data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/684"
								data-label="Gottfried Galston"></figure>
				<figure className="yith-manifest"
						data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"
						data-label="1900"></figure>
				<figure className="yith-manifest"
						data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"
						data-label="1903"
						data-region="1338,1238,2902,3479"
						data-autozoom="true"></figure>
				<figure className="yith-manifest"
						data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/700"
						data-label="1905"
						data-region="2450,1400,3000,2300"
						data-autozoom="true"></figure>
				<figure className="yith-manifest"
						data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694"
						data-label="1907"
						data-region="2168,729,3947,2732"
						data-autozoom="true"></figure>
			</div>
    </Yith>

  </Layout>
)

export default GalstonPage
