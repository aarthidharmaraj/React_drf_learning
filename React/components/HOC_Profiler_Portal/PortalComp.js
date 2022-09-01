import ReactDOM from "react-dom";
import React, { Component } from "react";
class PortalComp extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Creating Portal </h1>
        <button>Click Me !</button>
      </div>,
      document.getElementById("portal")
    );
  }
}

export default class SamplePortalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <div
        onClick={() => {
          this.handleClick();
        }}
      >
        <h1> Calling in a different portal</h1>
        {this.state.count}
        <PortalComp />
      </div>
    );
  }
}
