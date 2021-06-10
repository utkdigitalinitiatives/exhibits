import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./navigation"

const Header = ({ title }) => (
  <>
    <div className="exhibits-header">
      <div>
        <h1>
          <Link
            to="/"
          >
            {title}
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
