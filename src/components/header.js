import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./navigation"

const Header = ({ structure }) => (
  <>
    <div className="exhibits-header">
      <div>
        <h1>
          <Link
            to="/"
          >
            {structure.title}
          </Link>
        </h1>
      </div>
      <Navigation items={structure.nav} />
    </div>
  </>
)

export default Header
