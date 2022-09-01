import React, { Component } from "react";

export default class ProfilerFormComp extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
  }
  handleChange = (event) => {
    // event.target.name = event.target.value;
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Sample for Profiler </h1>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(event) => this.handleChange(event)}
        ></input>
      </div>
    );
  }
}
