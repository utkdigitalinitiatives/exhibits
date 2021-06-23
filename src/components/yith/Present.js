import React, { Component } from 'react';
import Manifest from "./Manifest";

class Present extends Component {

  render() {

    const {sequence} = this.props

    let region = null
    let autozoom = false

    if (sequence[0].region !== undefined) {
      region = sequence[0].region
    }

    if (sequence[0].autozoom !== undefined) {
      autozoom = sequence[0].autozoom
    }

    return (
      <div className="yith-structure">
        <div className={sequence[0].class}>
          <Manifest
            mode="present"
            manifest={sequence[0].manifest}
            region={region}
            autozoom={autozoom} />
        </div>
      </div>
    )

  }

}

export default Present;
