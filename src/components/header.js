import * as React from "react"
import { Link } from "gatsby"
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
