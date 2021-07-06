import React, { Component } from 'react';
import Mirador from "./Mirador";

class Comparison extends Component {

  constructor(props) {
    super(props);

    this.state ={
      windows: [0],
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

      return (
        <a href="#" className={active} data-index={index} onClick={this.toggleWindow}>
          <figure data-index={index}>
            <img src="" />
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
                  id: 'yith-mirador-default',
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
                mode="initial"
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
