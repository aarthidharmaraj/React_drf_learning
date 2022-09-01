import React, { Component } from "react";
import HOComp from "../HOC/HOComp";
class OriginalComp1 extends Component {
  render() {
    return (
      <div>
        <h1> Likes component </h1>
        {this.props.count}
        <button onClick={this.props.handleChange}></button>
      </div>
    );
  }
}

const EnhancedLikeComp = HOComp(OriginalComp1, 3);
export default EnhancedLikeComp;
