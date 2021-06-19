import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

import Index from "./Index"
import Screen from "./Screen"

class Chronology extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
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
          <article className="item"
                   name={name}
                   key={index}>
            <div className={element.class}>
              {element.label}
              a bunch of stuff
            </div>
          </article>
        )
      } else {
        return null
      }
    });
  }

  mapIndex = (sequence) => {
    return sequence.map((element, index) => {
      if (element.tag === 'figure') {
        return {
          label: element.label,
          target: 'chronology' + index
        }
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
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {

    const {sequence} = this.props
    const indexItems = this.mapIndex(sequence);

    return (
      <React.Fragment>
        <div className="yith-index">
          <Link to="0" spy={true} onSetActive={this.handleSetActive}>
            Test 1
          </Link>
          <Link to="1" spy={true} onSetActive={this.handleSetActive}>
            Test 2
          </Link>
          <Link to="2" spy={true} onSetActive={this.handleSetActive}>
            Test 3
          </Link>
          <Link to="3" spy={true} onSetActive={this.handleSetActive()}>
            Test 4
          </Link>
        </div>
        <div className="yith-structure-wrapper">
          <aside className="yith-structure">
            <Element name="0" className="yith-manifest">
              test 1
            </Element>
            <Element name="1" className="yith-manifest">
              test 2
            </Element>
            <Element name="2" className="yith-manifest">
              test 3
            </Element>
            <Element name="3" className="yith-manifest">
              test 4
            </Element>
            {/*<ElementsWrapper items={indexItems}>*/}
              {/*{this.mapStructure(sequence)}*/}
            {/*</ElementsWrapper>*/}
          </aside>
          <div className="yith-screen">
            <Screen activeIndex={this.state.activeIndex}
                    data={sequence} />
          </div>
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
