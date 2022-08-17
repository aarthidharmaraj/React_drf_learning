import React, { Component } from 'react'

export default class ConditionalRenderComp extends Component {
    constructor()
    {
        super()
        this.state={isLoggedIn:true}
        this.logInOut=this.logInOut.bind(this)
    }
    logInOut(){
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }  
  render(){
    let result=null
    // using if else operator
    if (this.state.isLoggedIn){
        result= <div style= {{color:'green'}}> 
        <h1>You have logged in</h1>
        <button onClick={()=>{this.logInOut()}}> Log Out</button>
        </div>
    }
    else{
        result= <div style= {{color:'red'}}> <h1> Please Log in</h1>
        <button onClick={()=>{this.logInOut()}}> Log In</button></div>

    }
    
    //using conditional operator
    this.state.isLoggedIn ? ( result =<div style= {{color:'green'}}> 
        <h1>You have logged in</h1>
        <button onClick={()=>{this.logInOut()}}> Log Out</button>
        </div>)
        :
        (result = <div style= {{color:'red'}}> <h1> Please Log in</h1>
        <button onClick={()=>{this.logInOut()}}> Log In</button></div>
        );
    return <div>{result}</div>

    //Inline If with Logical && Operator
    // Execute the right of && only if it is true otherwise no result.
        return this.state.isLoggedIn && <div style= {{color:'green'}}> 
        <h1>You have logged in</h1>
        <button onClick={()=>{this.logInOut()}}> Log Out</button>
        </div>

}

}
