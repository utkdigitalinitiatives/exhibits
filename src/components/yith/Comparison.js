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
      activeWindows: [],
      sequence: [],
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
          manifestId: this.state.sequence[index].manifestId,
          canvasId: this.state.sequence[index].canvasId
        }
      )
    }
    this.setState({
      activeWindows: active
    })
  }

  determine_label = (id) => {
    console.log(id)
    if (id === 'https://digital.lib.utk.edu/assemble/manifest/galston/1') {
      return "Concert Program"
    }
    else if (id === 'https://digital.lib.utk.edu/assemble/manifest/galston/178') {
      return "Handwritten Notes from Studienbuch"
    }
    else {
      return ""
    }
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
          <>
        <a href="#"
           className={active}
           data-index={index}
           onClick={this.toggleWindow}>
          <figure data-index={index}>
            <img data-index={index}
                  src={this.props.data[index].items[canvas].items[0].items[0].body[0].service['@id'] + '/full/!200,200/0/default.jpg'} alt={'Thumbnail for canvas from ' + this.props.data[index].label.en[0]} />
            <figcaption className="yith-comparison-caption">{this.determine_label(this.props.data[index].id)}</figcaption>
          </figure>
        </a>
        <p>{this.determine_label(this.props.data[index].id)}</p>
          </>
      )
    })
  }

  determineRegions = () => {
    return this.state.activeWindows.map((window, index) => {
      let region = null
      if (typeof this.state.sequence[index].region !== 'undefined') {
        region = this.state.sequence[index].region
      }
      return region
    });
  }

  getAnnotationById = (id, manifest) => {
    let data = null
    if (manifest) {
      manifest.items.map((canvas, canvasIndex) => {
        if (canvas.annotations) {
          return canvas.annotations[0].items.map((annotation, annotationIndex) => {
            if (annotation.id === id) {
              let target = annotation.target.split('#xywh=');
              data = {}
              data.canvasId = target[0];
              data.region = target[1];
            }
          });
        }
      });
    }
    return data
  }

  componentDidMount() {
    const { sequence } = this.props
    const items = sequence.map((item, index) => {
      if (item.type === 'manifest') {
        return {
          manifestId: item.manifest,
          canvasId: item.canvas
        }
      } else if (item.type === 'annotation') {
        const data = this.getAnnotationById(item.annotation, this.props.data[index])
        if (typeof data === 'object') {
          return {
            manifestId: item.manifest,
            canvasId: data.canvasId,
            region: data.region
          }
        }
      }
    })

    this.setState({
      activeWindows: [items[0]],
      sequence: items
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
                  id: `yith-mirador-${this.state.uuid}`,
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
                regions={this.determineRegions()}
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
