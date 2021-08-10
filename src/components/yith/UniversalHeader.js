import React, { Component } from 'react';
import logo from '../../media/utk-logo.png'

class UniversalHeader extends Component {

  render() {

    return (
      <div className="universal-header-navigation">
        <a href="https://utk.edu"><img src={logo}></img></a>
        <a className="libraries-link" href="https://lib.utk.edu">Libraries</a>
      </div>
    )

  }

}

export default UniversalHeader;
