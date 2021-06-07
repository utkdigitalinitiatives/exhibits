import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <>
    <Helmet>
      <title>Exhibits Demo</title>
      <script crossOrigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script crossOrigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <script src="https://www.lib.utk.edu/assets/universal-header.js?v=1.3.0" type="text/javascript" />
      <script src="https://yith.netlify.app/yith.js" type="text/javascript" />
    </Helmet>
    <header id="utk-lib-header" data-page-title="Exhibits | Libraries at University of Tennessee, Knoxville" />
    <div className="exhibits-header">
      <div>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Navigation />
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
