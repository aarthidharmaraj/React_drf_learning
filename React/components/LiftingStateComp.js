import React, { Component } from 'react'

export default class LiftingStateComp extends Component {
    constructor(){
        super()
        this.state={count:0}
        this.increament=this.increament.bind(this)
        this.decreament=this.decreament.bind(this)
    }
    increament=()=>{
        this.setState({count:this.state.count+1})
    }
    decreament=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div><h1>Lifting State Component</h1>
      <h2>first component called</h2>
      <Change count={this.state.count} increament={this.increament} decreament={this.decreament}/>
      <h2> Second component called</h2>
      <Change count={this.state.count} increament ={this.increament} decreament={this.decreament}/></div>
    )
  }
}

class Change extends Component{
    render(){
        return(
            <div> <h1> The class change component has called</h1>
            <h2> Count : {this.props.count}</h2>
            <button onClick={this.props.increament}> Increase</button>
            <button onClick={this.props.decreament}>Decrease</button></div>
        )
        
    }

}
