import React, { Component } from 'react';
import {findIndex} from 'lodash'

class TeaserBackground extends Component {

  render() {

    const {data, region, size} = this.props

    let canvasKey = 0;

    if (this.props.canvas !== undefined) {
      canvasKey = findIndex(data.items, ['id', this.props.canvas]);
    }

    const src = data.items[canvasKey].items[0].items[0].body[0].service[0]['@id'] + '/' + region + '/' + size + '/0/default.jpg'
    const alt = data.label.en[0]

    return (
      <div className="yith-teaser--background">
        
      </div>
    )

  }

}

export default TeaserBackground;
