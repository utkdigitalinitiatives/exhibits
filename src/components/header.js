import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <>
    <Helmet>
      <title>Exhibits Demo</title>
      <script crossOrigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script crossOrigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <script defer src="https://www.lib.utk.edu/assets/universal-header.js?v=1.3.0" async type="text/javascript" />
      <script src="https://yith.netlify.app/yith.js" async type="text/javascript" />
    </Helmet>
    <header id="utk-lib-header" data-page-title="Exhibits | Libraries at University of Tennessee, Knoxville" />
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
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
