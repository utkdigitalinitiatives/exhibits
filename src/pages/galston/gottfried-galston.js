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
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/696"
					data-label="1907"
					data-region="2168,729,3947,2732"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703"
					data-label="1908"
					data-region="1050,600,2000,1400"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/701"
					data-label="1909"
					data-region="835,446,5847,4691"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/706"
					data-label="1910"
					data-region="1667,1541,3188,2855"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/708"
					data-label="1912"
					data-region="348,484,6027,4464"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/708"
					data-label="1915"
					data-region="234,471,3017,4233"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/684"
					data-label="1919"
					data-region="734,670,4360,5541"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/697"
					data-label="1921"
					data-region="524,538,4395,5960"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/686"
					data-label="1921"
					data-region="1606,1982,2439,3684"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/690"
					data-label="1927"
					data-region="12,32,7384,5522"
					data-autozoom="true"></figure>
			<figure className="yith-manifest"
					data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/688"
					data-label="1950"
					data-region="475,498,3717,4773"
					data-autozoom="true"></figure>
      	</div>
    </Yith>

  </Layout>
)

export default GalstonPage
