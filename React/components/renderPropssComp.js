import React, { Component } from "react";
class RenderPropsComp extends Component {
  render() {
    // console.log(this.props.persons);
    const person = this.props.persons;
    return (
      <div>
        <li>{person.Name}</li>
        <li>{person.Age}</li>
        <li>{person.people["Name"]}</li>
      </div>
    );
  }
}

class OneComp extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { person: {} };
    this.state = { Name: "", Age: "", people: {} };
  }

  handleChange(event) {
    let people = this.state.people;
    people["Name"] = event.clientY;
    this.setState({ Name: event.clientX, Age: event.clientY, people }, () => {
      console.log(this.state.people);
    });
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleChange(e)} />
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MainComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <OneComp render={(person) => <RenderPropsComp persons={person} />} />
      </div>
    );
  }
}
