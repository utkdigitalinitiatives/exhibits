import React, { Component } from 'react';
import {findIndex} from 'lodash'

class TeaserBackground extends Component {

  render() {

    const {data, region, size} = this.props

    let canvasKey = 0;

    if (this.props.canvas !== undefined) {
      canvasKey = findIndex(data.items, ['id', this.props.canvas]);
    }

    return (
      <div className="yith-teaser--background">
        
      </div>
    )

  }

}

export default TeaserBackground;
