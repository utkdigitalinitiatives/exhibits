import React, { Component } from 'react';

import Chronology from "./Chronology";
import Projection from "./Projection";
import Present from "./Present";
import Comparison from "./Comparison";
import Teaser from "./Teaser";

class Mode extends Component {

  constructor(props) {
    super(props);

    this.state ={
      active: false,
      data: []
    }

    this.showModal = this.showModal.bind(this);
  }

  isActive = () => {
    this.setState(state => ({
      active: !state.active
    }));
  }

  showModal() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  renderExpand = (data, mode) => {
    if (mode === 'comparison') {
      if (data) {
        return (
          <a href="#"
             className="yith-comparison-teaser"
             onClick={this.isActive}>
            <span className="yith-expand">{data.value}</span>
            <Teaser sequence={this.state.sequence} />
          </a>
        )
      }
    } else {
      if (data) {
        return (
          <a href="#"
             className="yith-expand"
             onClick={this.isActive}>
            {data.value}
          </a>
        )
      }
    }
  }

  renderStructure = (structure, active, mode) => {
    if (mode === 'chronology') {
      return (
        <Chronology sequence={this.state.sequence}  />
      )
    } else if (mode === 'comparison') {
      return (
        <div className={`yith-modal-wrapper yith-modal-${active}`}>
          <Comparison sequence={this.state.sequence} active={active} showModal={this.showModal}  />
        </div>
      )
    } else if (mode === 'present') {
      return (
        <Present sequence={this.state.sequence} />
      )
    } else if (mode === 'projection' && this.state.data.length > 0) {
      return (
        <div className={`yith-modal-wrapper yith-modal-${active}`}>
          <Projection manifests={this.state.data} sequence={this.state.sequence} active={active} showModal={this.showModal} />
        </div>
      )
    }
  }

  getManifest = (uri, index) => {
    fetch(uri, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.state.data[index] = data
      })
      .catch(err => console.error(this.props.url, err.toString()));
    return null
  }

  buildSequence = (dom) => {
    let sequence = []

    dom.map((item, mIndex) => {
      if (item.tag === 'figure') {
        this.getManifest(item.data.manifest, mIndex);
        if (!item.annotations) {
          sequence.push({
            "type": "manifest",
            "tag": item.tag,
            "value": item.value,
            "mIndex": mIndex,
            "manifest": item.data.manifest,
            "canvas": item.data.canvas,
            "region": item.data.region,
            "autozoom": item.data.autozoom,
            "class": item.class
          })
        } else {
          item.annotations.map((annotation, aIndex) => {
            sequence.push({
              "type": "annotation",
              "tag": item.tag,
              "value": annotation.value,
              "mIndex": mIndex,
              "aIndex": aIndex,
              "manifest": item.data.manifest,
              "annotation": annotation.data.annotation,
              "region": item.data.region,
              "autozoom": item.data.autozoom,
              "class": item.class
            })
          });
        }
      } else {
        sequence.push({
          "type": "html",
          "tag": item.tag,
          "value": item.value,
          "class": item.class
        })
      }
    });

    this.setState(state => ({
      sequence: sequence
    }));
  }

  componentDidMount() {
    if (this.props.mode === 'chronology') {
      this.isActive()
    }

    if (this.props.structure) {
      this.buildSequence(this.props.structure)
    }
  }

  render() {

    const {mode, structure, expand} = this.props

    const {active} = this.state

    if (this.state.sequence) {
      return (
        <React.Fragment>
          {this.renderExpand(expand, mode)}
          {this.renderStructure(structure, active, mode)}
        </React.Fragment>
      )
    } else {
      return <div>Failed</div>
    }

  }
}

export default Mode;