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
    if (!this.state.active) {
      document.body.classList.add('modal-active')
    } else {
      document.body.classList.remove('modal-active')
    }
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
             onClick={this.showModal}>
            <span className="yith-expand">{data.value}</span>
            <Teaser sequence={this.state.sequence} mode={mode} />
          </a>
        )
      }
    } else if (mode === 'projection') {
        if (data) {
          return (
            <a href="#"
               className="yith-projection-teaser"
               onClick={this.showModal}>
              <div className="yith-projection-teaser--inner">
                <div className="yith-description">{this.props.description}</div>
                <span className="yith-expand">{data.value}</span>
              </div>
              <Teaser sequence={this.state.sequence} mode={mode} />
            </a>
          )
        }
    } else {
      if (data) {
        return (
          <a href="#"
             className="yith-expand"
             onClick={this.showModal}>
            {data.value}
          </a>
        )
      }
    }
  }

  renderStructure = (structure, active, mode) => {
    if (mode === 'chronology') {
      return (
        <Chronology sequence={this.state.sequence} description={this.props.description}  />
      )
    } else if (mode === 'comparison') {
      return (
        <div className={`yith-modal-wrapper yith-modal-${active}`}>
          <Comparison data={this.state.data} sequence={this.state.sequence} active={active} showModal={this.showModal}  />
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
            "label": item.data.label,
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

    // if (this.props.mode === 'projection') {
    //   console.log(dom)
    //   console.log(sequence)
    // }

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
