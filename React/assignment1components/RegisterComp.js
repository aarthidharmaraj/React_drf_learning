import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './formInput.css'
export default class AxiosComp extends Component {
    constructor(){
        super()
        this.state={persons:{},error:{}}
        this.CreateUser=this.CreateUser.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        let persons=this.state.persons
        const target = event.target;
        var value = target.value;
        const name = target.name;
        persons[name]=value
        
        this.setState({

            persons
        },()=>{
            console.log(this.state.persons);
        })
        
    }
    CreateUser(event){
        event.preventDefault()
        if(this.validate()){
        axios.post("http://localhost:9000/registeredusers/",this.state.persons).then((response)=>{
                // let persons={};

                this.setState({
                    persons:response.data,
                })
            alert("Form Submitted");
            }).catch((error)=>{
                alert("Data Saved Failed")
            })
    }
    }
    validate(){
        let persons=this.state.persons
        let valueError = "";
        let nameError="";
        let emailError = "";
        let passwordError = "";
        let matchError="";
        let CpasswordError="";
        if(!persons["name"]){
            nameError = "Name field is required";
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!persons['email'] || reg.test(persons['email']) === false){
            emailError = "Email Field is Invalid ";
        }
        if (!persons["language"]){
            valueError="Select a value from the given list"
        }
        if(!persons['password']){
            passwordError = "Password field is required";
        }
        if(!persons["confirm_password"]){
            CpasswordError = "Confirm Password field is required";
        }
        if (!(persons['password'] === persons["confirm_password"])){
            matchError="Password and Confirm Password are not matched"
        }
        if(emailError || valueError || passwordError || nameError || matchError||CpasswordError){
            this.setState({valueError,emailError,passwordError,nameError,matchError,CpasswordError});
            return false;
        }
         return true;
    }
  render() {
    return (
      <div><h3>USER REGISTRATION</h3>
      <form>
        <div>
      <label>USER NAME :</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        <span className="text-danger">{this.state.nameError}</span>
        <label> PROGRAMMING LANGUAGE</label>
                                    <select value={this.state.language} name="language" onChange={this.handleInputChange}> 
                                    <option>select </option>
                                    <option value="Python"> Python</option>
                                    <option value="Java"> Java</option>
                                    <option value="Django"> Django</option>
                                    <option value="React"> React</option>
                                    </select>
                                    <span className="text-danger">{this.state.valueError}</span>
      <label> EMAIL </label>
      <input type="email" name="email" onChange={this.handleInputChange}></input>
      <span className="text-danger">{this.state.emailError}</span>
      <label>PASSWORD</label>
      <input type="password" name="password" onChange={this.handleInputChange}></input>
      <span className="text-danger">{this.state.passwordError}</span>
      <label>Confirm Password :</label>
                                    <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.CpasswordError} {this.state.matchError}</span>
      <button className="button-submit" onClick={this.CreateUser}>Register</button>
      {/* <input type="submit"className="submit-button" value="Register" /> */}
                                    <h4>Already an user, login here</h4>
                                    {/* <input type="button"className="login-button" value="LogIn" />
                                     */}
                                    <Link to= "login"> User Login</Link>
                                    </div>
                                    </form>
      </div>
      
    )
  }
}
