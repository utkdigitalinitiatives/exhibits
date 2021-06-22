import React, { Component } from "react"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import Sticky from "react-sticky-el"

import Index from "./Index"
import Screen from "./Screen"

class Chronology extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      screenTop: 1000000,
    }
  }

  mapStructure = sequence => {
    return sequence.map((element, index) => {
      if (element.tag === "figure") {
        const name = "chronology_" + index
        return (
          <Element name={name} key={index} className={element.class}>
            <h4>{element.label}</h4>
            <p>a bunch of stuff</p>
          </Element>
        )
      } else {
        return null
      }
    })
  }

  mapIndex = sequence => {
    return sequence.map((element, index) => {
      if (element.tag === "figure") {
        const to = "chronology_" + index
        return (
          <Link to={to} spy={true} onSetActive={this.handleSetActive}>
            {element.label}
          </Link>
        )
      }
    })
  }

  handleSetActive = index => {
    if (typeof index !== "undefined") {
      if (index) {
        this.setState({
          activeIndex: parseInt(index.replace('chronology_', ''))
        })
      }
    }
  }

  handleScroll = () => {
    var yithIndex = document.getElementById("yith-index")
    var yithScreen = document.getElementById("yith-screen")
    var distanceToTop = yithIndex.getBoundingClientRect().top + yithIndex.offsetHeight
    var screenOpacity = yithScreen.getBoundingClientRect().height / (window.innerHeight - yithIndex.offsetHeight)

    this.setState({
      screenTop: distanceToTop,
      screenOpacity: screenOpacity
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

    scrollSpy.update()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  render() {
    const { sequence } = this.props

    let screenHeight = "calc(100% - " + this.state.screenTop + "px)"

    return (
      <React.Fragment>
        <Sticky>
          <div id="yith-index" className="yith-index">
            {this.mapIndex(sequence)}
          </div>
        </Sticky>
        <div className="yith-structure-wrapper">
          <aside className="yith-structure">
            <span className="yith-description">{this.props.description}</span>
            {this.mapStructure(sequence)}
          </aside>
          <div id="yith-screen" className="yith-screen" style={{ height: screenHeight }}>
            <Screen opacity={this.state.screenOpacity} activeIndex={this.state.activeIndex} data={sequence} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Chronology
