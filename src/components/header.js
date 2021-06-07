import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <>
    <Helmet>
      <title>Exhibits Demo</title>
      <script src="https://yith.netlify.app/yith.js" async type="text/javascript" />
    </Helmet>
    <header>
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
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
