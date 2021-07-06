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

  renderScreen = (data, active) => {
    return data.map((item, index) => {

      let region = null
      let autozoom = false

      if (item.region !== undefined) {
        region = item.region
      }

      if (item.region !== undefined) {
        autozoom = item.autozoom
      }

      return (
        <Manifest
          mode="chronology"
          index={index}
          activeIndex={active}
          opacity={this.props.opacity}
          manifest={data[index].manifest}
          region={region}
          autozoom={autozoom} />
      )
    })
  }

  render() {
    return (
      <>
        {this.renderScreen(this.props.data, this.state.activeIndex)}
      </>
    )

  }
}

export default Screen;
