import React, { Component } from 'react';
import Manifest from "./Manifest";

class Chronology extends Component {

  mapStructure = (sequence) => {

    return sequence.map((element, index) => {
      if (element.tag === 'span') {
        return (
          <React.Fragment key={index}>
            <span className={element.class}>{element.value}</span>
          </React.Fragment>
        )
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

        console.log(element);

        return (
          <React.Fragment key={index}>
            <div className={element.class}>
              <span>{element.label}</span>
              <Manifest
                manifest={element.manifest}
                region={null}
                autozoom={false} />
            </div>
          </React.Fragment>
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
        <div className="yith-structure">
          {this.mapStructure(sequence)}
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
