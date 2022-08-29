import React, { Component } from "react";
class ErrorBoundaryComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {/* {this.state.errorInfo.componentStack} */}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error("Counter extended the limit");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default function errorBoundary() {
  return (
    <div>
      <h1> Two counters with same error boundary</h1>
      <ErrorBoundaryComp>
        <Counter />
        <Counter />
      </ErrorBoundaryComp>
      <h2>Two counters with separate error boundary</h2>
      <ErrorBoundaryComp>
        <Counter />
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <Counter />
      </ErrorBoundaryComp>
    </div>
  );
}
