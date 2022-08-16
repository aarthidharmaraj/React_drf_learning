import React, { Component } from 'react'

// export default class ClassStateComp extends Component {
//   render() {
//     return (
//       <div><h1> State properpty example</h1>
//       <h2> {this.props.author.name} - state property name</h2>
//       <h2> {this.props.text} - state text </h2></div>
//     )
//   }
// }

// Using constructor
export default class ClassStateComp extends Component {
  // need to define the state variables
  constructor(props) {
    super(props);
    this.state = {text:'State property using constructor',name:'base_constructor'};
  }

  render() {
    return (
      <div><h1> State properpty with constructor example</h1>
      <h2> {this.state.name} - state property name</h2>
      <h2> {this.state.text} - state text </h2></div>
    )
  }
}

