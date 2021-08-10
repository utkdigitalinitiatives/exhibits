import React, { Component } from 'react';
import Mirador from "./Mirador";
import { v4 as uuid } from 'uuid';
import _ from "lodash"

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.showModal(false);
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {

    const { id } = this.props.iiif

    return (
      <React.Fragment>
        <a className="yith-close"
           tabIndex="0"
           href="#"
           aria-label={`Close Viewer`}
           onClick={this.showModal} >
          Close Viewer
        </a>
        <div className="yith-modal">
          <Mirador
            config={{
              id: `yith-mirador-${uuid()}`,
              createGenerateClassNameOptions: { // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
                productionPrefix: `mirador-${uuid()}`,
              },
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

  }
}

export default Modal;
