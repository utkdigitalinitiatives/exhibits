import React, { Component } from "react"

import Mode from "./Mode"
import _ from "lodash"

class Yith extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  buildExpand(items) {
    let key = _.findIndex(items, function (o) {
      return o.props.className == "yith-expand"
    })

    if (key !== -1) {
      return {
        value: items[key].props.children,
      }
    } else {
      return false
    }
  }

  buildStructure(items) {
    let children = {}

    if (Array.isArray(items)) {
      let key = _.findIndex(items, function (o) {
        return o.props.className == "yith-structure"
      })
      children = items[key].props.children
    } else {
      children = items.props.children
    }

    if (!Array.isArray(children)) {
      children = [children]
    }

    const structure = children.map(function (el) {
      let item = {}
      let annotationsStructure = null;

      item.tag = el.type
      item.value = null
      item.data = {}

      if (el.props.className !== "") {
        item.class = el.props.className
      }

      if (el.props["data-manifest"]) {
        item.data.manifest = el.props["data-manifest"]
      }

      if (el.props["data-canvas"]) {
        item.data.canvas = el.props["data-canvas"]
      }

      if (el.props["data-region"]) {
        item.data.region = el.props["data-region"]
      }

      if (el.props["data-autozoom"]) {
        item.data.autozoom = el.props["data-autozoom"]
      }

      if (el.props["data-label"]) {
        item.data.label = el.props["data-label"]
      }

      if (Array.isArray(el.props.children)) {
        item.value = null
      } else {
        item.value = el.props.children
      }

      if (el.props.children !== undefined) {
        if (typeof el.props.children === 'object') {
          if (el.props.children.type === 'div' && el.props.children.props.class === 'yith-items') {
            let annotations = el.props.children.props.children

            annotationsStructure = annotations.map(function (el) {

              let aItem = {}

              aItem.tag = el.type
              aItem.value = null
              aItem.data = {}

              if (el.props.className !== "") {
                aItem.class = el.props.class
              }

              if (el.props["data-annotation"]) {
                aItem.data.annotation = el.props["data-annotation"]
              }

              return aItem;
            });
          }
        }
      }

      if (annotationsStructure) {
        item.annotations = annotationsStructure
      }

      return item
    })

    return structure
  }

  componentDidMount() {
    this.setState({
      expand: this.buildExpand(this.props.children),
      structure: this.buildStructure(this.props.children),
    })
  }

  render() {
    if (this.state.structure) {
      return (
        <div className={`yith yith-${this.props.mode}`}>
          <Mode
            expand={this.state.expand}
            structure={this.state.structure}
            mode={this.props.mode}
            description={this.props.description}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default Yith
