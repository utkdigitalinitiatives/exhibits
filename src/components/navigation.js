import * as React from "react"
import Link from "gatsby-link"

function mapNav ({items}) {
  return (
    <Link
      to="/"
      activeClassName="active"
    >
    Introduction
    </Link>
  )
}

const Navigation = () => (
  <>
    <nav>
      {mapNav({})}
    </nav>
  </>
)

export default Navigation
