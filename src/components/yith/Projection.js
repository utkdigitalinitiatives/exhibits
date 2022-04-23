import React, { Component } from 'react';
import Mirador from "./Mirador";
import { v4 as uuid } from "uuid"

class Projection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      loaded: false,
      annotations: false,
      activeWindow: null,
      slideMode: 'initial',
      minimized: false,
      contextLayout: 'default',
      uuid: uuid(),
      region: null
    }

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.props.showModal(false);
  }

  resetSequence = (e) => {
    e.stopPropagation();
    this.setState({
      index: 0,
      loaded: false,
      autozoom: false,
      regions: null,
      interaction: 'toggle',
      slideMode: 'initial'
    });
    this.showModal();
  }

  selectPrev = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (this.state.index !== 0) {
      let nextIndex = this.state.index - 1;
      this.setState({
        index: nextIndex,
        loaded: false,
        autozoom: false,
        region: null,
        interaction: 'toggle',
        slideMode: 'nextAnnotation'
      });
    }
  }

  selectNext = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let last = this.props.sequence.length - 1
    if (this.state.index != last) {
      let nextIndex = this.state.index + 1;
      this.setState({
        index: nextIndex,
        loaded: false,
        autozoom: false,
        region: null,
        interaction: 'toggle',
        slideMode: 'nextAnnotation'
      });
    }
  }

  toggleContext = (e) => {
    e.stopPropagation();
    e.preventDefault();

    this.setState({minimized: !this.state.minimized});
  }

  hasAnnotations = (current) => {
    if (current.annotations) {
      return true
    } else {
      return false
    }
  }

  handleSlide = () => {
    if (!this.state.loaded) {
      let slide = this.props.sequence[this.state.index]
      const data = this.props.manifests[slide.mIndex]
      if (slide.type === 'annotation') {
        data.items.map((canvas, canvasIndex) => {
          if (canvas.annotations) {
            canvas.annotations[0].items.map((annotation, annotationIndex) => {
              if (annotation.id === slide.annotation) {
                let target = annotation.target.split('#xywh=');
                if (this.state.activeWindow) {
                  if (this.state.activeWindow.canvasId !== target[0]) {
                    this.setState({
                      slideMode: 'nextCanvas'
                    })
                  }
                }
                this.setState({
                  loaded: true,
                  annotations: true,
                  annotation: annotation,
                  activeWindow: {
                    highlightAllAnnotations: true,
                    manifestId: slide.manifest,
                    canvasId: canvas.id,
                    selectedAnnotationId: annotation.id
                  },
                  autozoom: true,
                  region: target[1]
                })
              }
            });
          }
        });
      } else if (slide.type === 'manifest') {
        this.setState({
          loaded: true,
          annotations: false,
          annotation: null,
          activeWindow: {
            manifestId: slide.manifest,
            canvasId: this.props.manifests[slide.mIndex].items[0].id
          },
          slideMode: 'nextManifest'
        })
      }
    }
  }

  getAnnotationBody = () => {
    if (this.state.annotation) {
      return <div>{this.state.annotation.body.value}</div>
    } else {
      return null
    }
  }

  getAttribution = () => {
    let manifestIndex = this.props.sequence[this.state.index].mIndex;
    let manifest = this.props.manifests[manifestIndex];
    let attribution = manifest.requiredStatement;

    return <span>{attribution.label.en[0]}: {attribution.value.en[0]}</span>
  }

  getManifestDetails = () => {
    return (
      <React.Fragment>
        {this.getAnnotationBody()}
        {this.getAttribution()}
      </React.Fragment>
    )
  }

  getMirador = () => {
    console.log(this.state.region)
    return (
      <Mirador
        config={{
          id: `yith-mirador-${this.state.uuid}`,
          createGenerateClassNameOptions: { // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
            productionPrefix: `mirador-${this.state.uuid}`,
          },
          selectedTheme: 'dark',
          window: {
            hideWindowTitle: true,
            allowTopMenuButton: false,
            allowWindowSideBar: false,
            allowMaximize: false,
            allowClose: false,
            forceDrawAnnotations: false
          },
          windows: [this.state.activeWindow],
          workspaceControlPanel: {
            enabled: false,
          },
        }}
        plugins={[]}
        manifest={this.props.sequence[this.state.index].manifest}
        regions={[this.state.region]}
        mode={this.state.slideMode}
      />
    )
  }

  componentDidMount() {
    this.handleSlide()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleSlide()
  }

  render() {

    if (this.props.active && this.state.activeWindow) {
      return (
        <React.Fragment>
          <div className="yith-structure">
            <a className="yith-close"
               tabIndex="0"
               href="#"
               aria-label={`Close Viewer`}
               onClick={this.resetSequence}
            >
              Close Viewer
            </a>
            <div className="yith-modal">
              <div className="yith-context">
                <div className={this.state.minimized ? "yith-hidden" : ""}>
                  <div className="yith-context--html" dangerouslySetInnerHTML={{__html:this.props.sequence[this.state.index].value}}></div>
                  <div className="yith-context--details">
                    {this.getManifestDetails()}
                  </div>
                </div>
                <nav>
                  <a href="#" onClick={this.selectPrev}>Prev</a>
                  <a href="#" onClick={this.selectNext}>Next</a>
                  <a href="#" className="yith-minimize-button" onClick={this.toggleContext}>{this.state.minimized ? "+" : "_"}</a>
                </nav>
              </div>

              {this.getMirador()}
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }

  }
}

export default Projection;
