import React, { Component } from 'react';
import mirador from 'mirador';

class Mirador extends Component {
  constructor(props) {
    super(props);

    this.miradorInstance = null;
  }

  handleInstance = (mode) => {
    const { config, plugins } = this.props;

    let delay = 0
    if (mode === 'initial' || mode === 'nextManifest' || mode === 'nextCanvas') {
      this.miradorInstance = mirador.viewer(config, plugins);
      delay = 2000
    }

    if (typeof this.props.regions !== 'undefined') {
      this.props.regions.map((region, index) => {
        if (region) {
          this.panZoom(delay, region, index)
        }
      });
    }
  }

  panZoom = (ms, xywh, windowIndex) => {

    const windowId = Object.keys(this.miradorInstance.store.getState().windows)[windowIndex];

    const region = xywh.split(",");

    const boxToZoom = {
      x: parseInt(region[0]),
      y: parseInt(region[1]),
      width: parseInt(region[2]),
      height: parseInt(region[3])
    };

    const zoomCenter = {
      x: boxToZoom.x + boxToZoom.width / 2,
      y: boxToZoom.y + boxToZoom.height / 2
    };

    var action = mirador.actions.updateViewport(windowId, {
      x: zoomCenter.x,
      y: zoomCenter.y,
      zoom: 0.61888 / boxToZoom.width
    });

    setTimeout(() => {
      this.miradorInstance.store.dispatch(action);
    }, ms);

  }

  componentDidMount() {
    this.handleInstance(this.props.mode)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mode !== 'initial') {
      this.handleInstance(this.props.mode)
    }
  }

  render() {
    const { config } = this.props;
    return <div id={config.id} />;
  }
}

export default Mirador;
