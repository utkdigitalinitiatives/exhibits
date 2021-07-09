import * as React from "react"
import Link from "gatsby-link"

function mapNav (items) {
  return items.map(function(el, index){
    return (
      <Link
        key={index}
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
