import * as React from "react"
import Link from "gatsby-link"

function mapNav (items) {
  return items.map(function(el){
    return (
      <Link
        to={el.to}
        activeClassName="active"
      >
        {el.text}
      </Link>
    )
  });
}

const Navigation = (items) => (
  <>
    <nav>
      {mapNav(items.items)}
    </nav>
  </>
)

export default Navigation
