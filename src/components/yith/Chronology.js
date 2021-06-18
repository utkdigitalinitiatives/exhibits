import React, { Component } from 'react';
import Manifest from "./Manifest";
import Index from "./Index"
import Screen from "./Screen"

class Chronology extends Component {

  mapStructure = (sequence) => {

    return sequence.map((element, index) => {
      if (element.tag === 'span') {
        return <span className={element.class} key={index}>{element.value}</span>
      } else if (element.tag === 'figure') {

        let region = null
        if (typeof element.region === 'string') {
          region = element.region
        }

        let autozoom = false
        if (typeof element.autozoom === 'string') {
          if (element.autozoom === 'true') {
            autozoom = true
          }
        }

        return (
          <article className={element.class} key={index}>
            {element.label}
          </article>
        )
      } else {
        return null
      }
    });
  }

  render() {

    const {sequence} = this.props

    return (
      <React.Fragment>
        <div className="yith-index">
          <Index items={sequence} />
        </div>
        <div className="yith-structure-wrapper">
          <aside className="yith-structure">
            {this.mapStructure(sequence)}
          </aside>
          <div className="yith-screen">
            <Screen activeScreen={sequence[2]} />
          </div>
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
