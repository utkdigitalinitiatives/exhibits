import * as React from "react"
import Link from "gatsby-link"

const Navigation = () => (
  <>
    <nav>

      <Link
        to="/"
        activeClassName="active"
      >
        Introduction
      </Link>

      <Link
        to="/studienbuch"
        activeClassName="active"
      >
        The Studienbuch
      </Link>

      <Link
        to="/galston"
        activeClassName="active"
      >
        Gottfried Galston
      </Link>

      <Link
        to="/concert-programs"
        activeClassName="active"
      >
        Concert Programs
      </Link>

      <Link
        to="/resources"
        activeClassName="active"
      >
        Resources
      </Link>

    </nav>
  </>
)

export default Navigation
