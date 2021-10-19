import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div className="utk-exhibits-footer">
        <p>Site Navigation</p>
          <a href="#">The Studienbuch</a>
          <a href="#">Concert Programs</a>
          <a href="#">Gottfried Galston</a>
          <a href="#">Music Pedagogy</a>
          <a href="#">Resources</a>

          <div className="exhibits-copyright">
            <p>&copy;2021 UTK Libraries</p>
            </div>
      </div>
    )
  }
}

export default Footer
