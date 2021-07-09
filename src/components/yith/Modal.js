import React, { Component } from 'react';
import Mirador from "./Mirador";
import _ from "lodash"

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  showModal(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {

    const { id } = this.props.iiif

    return _.debounce(() => {
      return (
        <React.Fragment>
          <a className="yith-close"
             tabIndex="0"
             href="#"
             aria-label={`Close Viewer`}
            // onClick={this.showModal}
          >
            Close Viewer
          </a>
          <div className="yith-modal">
            <Mirador
              config={{
                id: 'yith-mirador-default',
                window: {
                  hideWindowTitle: false,
                  sideBarOpen: true,
                  defaultSidebarPanelWidth: 320,
                  allowTopMenuButton: true,
                  allowWindowSideBar: true,
                  allowMaximize: false,
                  allowClose: false,
                  forceDrawAnnotations: true
                },
                workspace: {
                  showZoomControls: true, // Configure if zoom controls should be displayed by default
                },
                windows: [{
                  manifestId: id
                }],
                workspaceControlPanel: {
                  enabled: false,
                },
              }}
              plugins={[]}
              manifest={this.props.iiif.id}
              region={this.props.region}
              autozoom={this.props.autozoom}
              mode="initial"
            />
          </div>
        </React.Fragment>
      )
    }, 100)

  }
}

export default Modal;
