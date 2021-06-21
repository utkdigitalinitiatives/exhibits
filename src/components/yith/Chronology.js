import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import Sticky from 'react-sticky-el';

import Index from "./Index"
import Screen from "./Screen"

class Chronology extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      screenTop: 300
    };
  }

  mapStructure = (sequence) => {

    return sequence.map((element, index) => {
      if (element.tag === 'figure') {

        let region = null
        if (typeof element.region === 'string') {
          region = element.region
        }

        let autozoom = false
        if (typeof element.autozoom === 'string') {
          if (element.autozoom === 'true') {
            autozoom = true
          }
        }

        const name = 'chronology' + index

        return (

          <Element name={index} key={index} className={element.class}>
            <h4>{element.label}</h4>
            <p>a bunch of stuff</p>
          </Element>
        )
      } else {
        return null
      }
    });
  }

  mapIndex = (sequence) => {
    return sequence.map((element, index) => {
      if (element.tag === 'figure') {
        return (
          <Link to={index} spy={true} onSetActive={this.handleSetActive}>
            {element.label}
          </Link>
        )
      }
    });
  }

  handleSetActive = (index) => {
    if (typeof index !== "undefined") {
      let activeIndex = parseInt(index)
      if (Number.isInteger(activeIndex)) {
        this.setState({
          activeIndex: activeIndex
        })
      }
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      // console.log('end', arguments);
    });

    scrollSpy.update();

    window.addEventListener("scroll", ()=> {
      var yithIndex = document.getElementById('yith-index');
      var distanceToTop = yithIndex.getBoundingClientRect().top;

      this.setState({
        screenTop: distanceToTop + yithIndex.offsetHeight
      })
    });

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {

    const {sequence} = this.props

    let screenHeight = 'calc(100% - ' + this.state.screenTop + 'px)';

    return (
      <React.Fragment>
        <Sticky>
          <div id="yith-index" className="yith-index">
            {this.mapIndex(sequence)}
          </div>
        </Sticky>
        <div className="yith-structure-wrapper">
          <aside className="yith-structure">
            {this.mapStructure(sequence)}
          </aside>
          <div className="yith-screen"
               style={{height: screenHeight}}>
            <Screen activeIndex={this.state.activeIndex}
                    data={sequence} />
          </div>
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
