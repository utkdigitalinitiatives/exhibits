import React, { Component } from 'react';
import Mirador from "./Mirador";
import _ from "lodash"
import { v4 as uuid } from "uuid"

class Comparison extends Component {

  constructor(props) {
    super(props);

    this.state ={
      windows: [0],
      uuid: uuid(),
      activeWindows: [
        {
          manifestId: this.props.sequence[0].manifest,
          canvasId: this.props.sequence[0].canvas
        }
      ],
      sequence: [
        {
          manifestId: this.props.sequence[0].manifest,
          canvasId: this.props.sequence[0].canvas
        },
        {
          manifestId: this.props.sequence[1].manifest,
          canvasId: this.props.sequence[1].canvas
        }
      ],
      data: []
    }

    this.showModal = this.showModal.bind(this);
    this.toggleWindow = this.toggleWindow.bind(this);
  }

  showModal(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.showModal(false);
  }

  toggleWindow = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const current = parseInt(e.target.getAttribute('data-index'))

    if (this.state.windows.includes(current)) {
      this.state.windows.pop(current)
    } else {
      this.state.windows.push(current)
    }

    this.getActiveWindows()
  }

  getActiveWindows = () => {
    let active = [];
    for (const index of this.state.windows) {
      active.push(
        {
          manifestId: this.props.sequence[index].manifest,
          canvasId: this.props.sequence[index].canvas
        }
      )
    }
    this.setState({
      activeWindows: active
    })
  }

  renderNavigation = (activeWindows, sequence) => {
    return sequence.map((item, index) => {

      let active = '';
      if (activeWindows.includes(index)) {
        active = 'active'
      }

      let canvas = _.findIndex(this.props.data[index].items, function (o) {
        return o.id == sequence[index].canvasId
      })
      if (canvas == -1) {
        canvas = 0
      }

      return (
        <a href="#"
           className={active}
           data-index={index}
           onClick={this.toggleWindow}>
          <figure data-index={index}>
            <img data-index={index}
                  src={this.props.data[index].items[canvas].items[0].items[0].body[0].service['@id'] + '/full/!200,200/0/default.jpg'} />
          </figure>
        </a>
      )
    })
  }

  render() {

    let { windows, activeWindows, sequence } = this.state;

    if (this.props.active) {
      return (
        <React.Fragment>
          <a className="yith-close"
             tabIndex="0"
             href="#"
             aria-label={`Close Viewer`}
             onClick={this.showModal}
          >
            Close Viewer
          </a>
          <div className="yith-modal">
            <div className="yith-modal--inner">
              <Mirador
                config={{
                  id: `yith-mirador-${this.state.uuid}}`,
                  createGenerateClassNameOptions: { // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
                    productionPrefix: `mirador-${this.state.uuid}`,
                  },
                  window: {
                    hideWindowTitle: false,
                    sideBarOpen: false,
                    allowTopMenuButton: true,
                    allowWindowSideBar: true,
                    allowMaximize: false,
                    allowClose: false,
                    forceDrawAnnotations: true
                  },
                  windows: activeWindows,
                  workspace: {
                    showZoomControls: true, // Configure if zoom controls should be displayed by default
                  },
                  thumbnailNavigation: {
                    defaultPosition: 'far-bottom', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
                    displaySettings: true, // Display the settings for this in WindowTopMenu
                    height: 100, // height of entire ThumbnailNavigation area when position is "far-bottom"
                    width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
                  },
                  osdConfig: { // Default config used for OpenSeadragon
                    showNavigationControl: false,
                  },
                  workspaceControlPanel: {
                    enabled: false,
                  },
                }}
                plugins={[]}
                mode="nextManifest"
              />
            </div>
            <div className="yith-modal--navigation">
              {this.renderNavigation(windows, sequence)}
            </div>
          </div>
        </React.Fragment>
      )
    } else
      return null
    }

}

export default Comparison;
