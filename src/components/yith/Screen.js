import React, { Component } from 'react';
import Manifest from "./Manifest"

class Screen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <Manifest
          mode="chronology"
          manifest={this.props.activeScreen.manifest}
          region={null}
          autozoom={false} />
      </React.Fragment>
    )

  }
}

export default Screen;
