import React, { Component } from 'react'
import "./formInput.css";

export default class FormComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         email:'',
         topic:' ',
         password:'',
         confirm_Password:''
      }
    }
    handleChangeUser(event){
        this.setState({username:event.target.value})
    }
    handleChangeEmail(event){

        this.setState({email:event.target.value})}
    handleChangePassword(event){
        this.setState({password:event.target.value})}
    handleChangeConPass(event){
        this.setState({confirm_Password:event.target.value})
    }
    handleChangeTopic(event){
        this.setState({Topic:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        alert(`The form is submitted ${this.state.username}`)
    }

  render() {
    return (
        <form onSubmit={(e)=>this.handleSubmit(e)}>
      <div className='formTitle'><h1>Registration Form</h1>
      <div className='formInputs'>
            <div><label> USERNAME</label><input type="text" value={this.state.username} placeholder="Enter the Username" onChange={(e)=>{this.handleChangeUser(e)}}/> </div>
            <div><label> EMAIL ADDRESS</label><input type="email" value={this.state.email} placeholder="Enter the email id" onChange={(e)=>{this.handleChangeEmail(e)}}/> </div>
            <div><label>SELECT TOPIC</label>
            <select value={this.state.topic} onChange={(e)=>{this.handleChangeTopic(e)}}> 
            <option value="react"> React</option>
            <option value="angular"> Angular</option>
            <option value="drf"> DRF</option>
            </select></div>
            <div><label> PASSWORD</label><input type="text" value={this.state.password} placeholder="Enter the Password" onChange={(e)=>{this.handleChangePassword(e)}}/> </div>
            <div><label> CONFIRM PASSWORD</label><input type="text" value={this.state.confirm_Password} placeholder="Confirm the password" onChange={(e)=>{this.handleChangeConPass(e)}}/> </div>
            <div><input type="submit" value="Submit" /></div>
      </div>
      </div>
      </form>
    )
  }
}
