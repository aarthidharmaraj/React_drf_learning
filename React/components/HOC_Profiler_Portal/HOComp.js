import React, { Component } from "react";
const HOComp = (OriginalComp, data) => {
  return class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: data,
        username: JSON.stringify(localStorage.getItem("username")),
        email: JSON.stringify(localStorage.getItem("email")),
      };
    }

    handleChange = () => {
      this.setState({ count: this.state.count + 1 }, () =>
        console.log("The count has been increamented")
      );
    };
    render() {
      return (
        <div>
          <h1>
            Sample using higher order component for likes and comments component
          </h1>
          <OriginalComp
            username={this.state.username}
            email={this.state.email}
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>
      );
    }
  };
};
export default HOComp;
