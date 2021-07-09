import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Modal from "./Modal";

class FigureScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      activeId: null,
      loaded: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleComponent () {
    const { manifest } = this.props;

    let region = 'full';
    if (this.props.region !== null) {
      region = this.props.region
    }

    this.setState({
      loaded: true,
      activeId: manifest.id,
      label: manifest.label.en[0],
      media: manifest.items[0].items[0].items[0].body[0].service['@id'] + '/' + region + '/!1200,1200/0/default.jpg'
    })
  }

  componentDidMount() {
    this.handleComponent()
  }

  yithModal() {
    if (this.state.active) {
      return <Modal iiif={this.props.manifest}
                    region={this.props.region}
                    autozoom={this.props.autozoom}
                    showModal={this.showModal} />
    }
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showModal();
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

  render() {

    let {label, media, loaded} = this.state

    let active = ''
    if (this.props.index === this.props.activeIndex) {
      active = 'yith-figure-screen-active'
    }

    if (loaded) {
      return (
        <React.Fragment>
          <figure className={`yith-figure yith-figure-screen ${active}`}>
            <div className="yith-figure--preview">
              <div className="yith-figure--preview--inner">
                <a tabIndex="0"
                   href="#"
                   aria-label={`Expand ${label} in Viewer`}
                   onClick={this.handleClick}>
                  <LazyLoad>
                    <img src={media} />
                  </LazyLoad>
                  {this.state.active ? true : false}
                </a>
              </div>
            </div>
          </figure>
          <div className={`yith-modal-wrapper yith-modal-${this.state.active}`}>
            {this.yithModal()}
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }

  }
}

export default FigureScreen;
