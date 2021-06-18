import React, { Component } from 'react';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  renderItems = (items) => {
    return items.map((item, index) => {
      return <a href="#">{item.label}</a>
    });
  }

  render() {

    if (this.props.items) {
      return (
        <div>
          {this.renderItems(this.props.items)}
        </div>
      )
    } else {
      return null
    }

  }
}

export default Index;
