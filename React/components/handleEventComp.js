// Event hadling with function component
import React from 'react'

export default function HandleEventComp() {
    function handleEvent(name){
        console.log("name is -",name)
    }
    //// function with event
    function handleEvente(name,event){
        console.log("name is -",name)
        console.log("Event is - ",event)
        console.log('Event type is - ',event.type)
    }
    ////to display form submsision
    function formSubmit(event){
        event.preventDefault();
        console.log("Form is submitted")
    }

  return (
    <div><h1> Event handle with passing arguments</h1>
    <button onClick={()=>handleEvent('Jack')}> Click event</button>
    <button onClick={(e)=>handleEvente('Jack',e)}> View Event</button>
    <form onSubmit={(e)=>formSubmit(e)}>
        <input type='text' name='' id=''></input>
        <button> Submit</button> </form>
    </div>
  )
}

//// Event handling with class component

import React, { Component } from 'react'

export default class HandleEventComp extends Component {
    constructor(props)
    {
        super(props)
        this.state={name:"Jack"}
        //// other method to bind this is inside the constructor
        this.handleEvent=this.handleEvent.bind(this)
    }
    handleEvent(){
        console.log("Class event is clicked")
        this.setState({name:"Sparrow"})
            }

  render() {
    return (
      <div><h1>Event handling with class component </h1>
      <h2>{this.state.name}</h2>
      {/* one method to bind this to use in the method called */}
      {/* <button onClick={this.handleEvent.bind(this)}> class event</button> */}
      <button onClick={()=>{this.handleEvent()}}> class event
        </button>
      </div>
    )
  }
}
