import React, { Component } from 'react';
import Manifest from "./Manifest"

class Screen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.activeIndex !== this.props.activeIndex) {
      this.setState({
          activeIndex: this.props.activeIndex
      })
    }
  }

  render() {

    let region = null
    let autozoom = false

    if (this.props.data[this.state.activeIndex].region !== undefined) {
      region = this.props.data[this.state.activeIndex].region
    }

    if (this.props.data[this.state.activeIndex].region !== undefined) {
      autozoom = this.props.data[this.state.activeIndex].autozoom
    }

    return (
      <React.Fragment>
        <Manifest
          mode="chronology"
          activeIndex={this.props.activeIndex}
          opacity={this.props.opacity}
          manifest={this.props.data[this.state.activeIndex].manifest}
          region={region}
          autozoom={autozoom} />
      </React.Fragment>
    )

  }
}

export default Screen;
