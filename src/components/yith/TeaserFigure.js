import React, { Component } from 'react';
import {findIndex} from 'lodash'

class TeaserFigure extends Component {

  render() {

    const {data, region, size} = this.props

    let canvasKey = 0;

    if (this.props.canvas !== undefined) {
      canvasKey = findIndex(data.items, ['id', this.props.canvas]);
    }

    const src = data.items[canvasKey].items[0].items[0].body[0].service['@id'] + '/' + region + '/' + size + '/0/default.jpg'
    const alt = data.label.en[0]
    const srclast = "https://digital.lib.utk.edu/iiif/2/collections~islandora~object~galston:191~datastream~JP2/full/!700,700/0/default.jpg"
    const spine = "https://digital.lib.utk.edu/iiif/2/collections~islandora~object~galston:712~datastream~JP2/full/!700,700/1/default.jpg"

    if (src === "https://digital.lib.utk.edu/iiif/2/collections~islandora~object~galston:219~datastream~JP2/full/!700,700/0/default.jpg") {
      return (
          <div className="yith-teaser-figure">
            <img src={src} alt={alt} />
            <img src={spine} alt={alt} />
            <img src={srclast} alt={alt} />
          </div>
      )
    }
    else {
      return (
          <div className="yith-teaser-figure">
            <img src={src} alt={alt} />
          </div>
      )
    }


  }

}

export default TeaserFigure;
