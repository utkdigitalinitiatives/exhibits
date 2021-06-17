import React, { Component } from 'react';
import Manifest from "./Manifest";

class Present extends Component {

  render() {

    const {sequence} = this.props

    return (
      <div className="yith-structure">
        <div className={sequence[0].class}>
          <Manifest
            manifest={sequence[0].manifest}
            region={null}
            autozoom={false} />
        </div>
      </div>
    )

  }

}

export default Present;
