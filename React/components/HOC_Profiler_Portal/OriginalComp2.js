import React, { Component } from "react";
import HOComp from "../HOC/HOComp";
class OriginalComp2 extends Component {
  render() {
    return (
      <div>
        <h1>Comments Component</h1>
        <h2>Hello {this.props.username}</h2>
        <h3>You have logged in with id {this.props.email}</h3>
        {this.props.count}
        <button onClick={this.props.handleChange} />
      </div>
    );
  }
}
const EnhancedCommentComp = HOComp(OriginalComp2, 6);
export default EnhancedCommentComp;
