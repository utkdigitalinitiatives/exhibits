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

    return (
      <React.Fragment>
        <Manifest
          mode="chronology"
          manifest={this.props.data[this.state.activeIndex].manifest}
          region={null}
          autozoom={false} />
      </React.Fragment>
    )

  }
}

export default Screen;
