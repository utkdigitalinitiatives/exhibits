import React, { Component } from 'react';
import Figure from "./Figure";
import FigureScreen from "./FigureScreen"

class Manifest extends Component {

  constructor(props) {
    super(props);

    this.state ={
      activeIndex: null
    }
  }

  getManifest = (uri) => {
    if (this.state.activeIndex !== this.props.activeIndex) {
      console.log(uri)
      fetch(uri, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            activeIndex: this.props.activeIndex,
            data: data
          });
        })
        .catch(err => console.error(this.props.url, err.toString()));

      return null
    }
  }

  componentDidMount() {
    this.getManifest(this.props.manifest)
  }

  componentDidUpdate() {
    this.getManifest(this.props.manifest)
  }

  render() {
    if (this.state.data) {
      if (this.props.mode === 'chronology') {
        return (
          <FigureScreen manifest={this.state.data}
                        region={this.props.region}
                        opacity={this.props.opacity}
                        autozoom={this.props.autozoom} />
        )
      } else if (this.props.mode === 'present') {
        return (
          <Figure manifest={this.state.data}
                  region={this.props.region}
                  autozoom={this.props.autozoom} />
        )
      }
    } else {
      return null
    }

  }
}

export default Manifest;
