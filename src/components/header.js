import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <>
    <Helmet>
      <title>Exhibits Demo</title>
      <script src="https://yith.netlify.app/yith.js" async type="text/javascript" />
    </Helmet>
    <div
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div>
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
