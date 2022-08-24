import React, { Component } from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'

export default class UserLogin extends Component {
    constructor(){
        super();
        this.state = {email:"",password:''}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.displayUsers=this.displayUsers.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        },()=>{
            console.log("email :",this.state.email,"Password:",this.state.password);
        }) 
    }
    validate(){
        let emailError = "";
        let passwordError = "";
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
            emailError = "Email Field is Invalid ";
        }
        if(!this.state.password){
            passwordError = "Password field is required";
        }
        if(emailError|| passwordError){
            this.setState({emailError,passwordError});
            return false;
        }
         return true;
    }
    displayUsers(event){
        event.preventDefault()
        let persons=[]
        if(this.validate()){
        axios.get("http://localhost:9000/registeredusers", {
            params: {
                email: this.state.email,
                password: this.state.password
            }
          }).then((response) => {
            if (response.data.length>0){
            persons = response.data
            console.log("data",persons)
            alert ("The user has been logged in successfully")
            return persons}

            alert("The user is not registered")
    }).catch((error) => {
        alert("No response from api",error)
    // persons=null
})
        // return persons
    }
}

    render(){
        return(
            <div className='container'>
            <form>
            <div className="form">
                        <h3>User Login</h3><br />
                                    <label>Email :</label>
                                    <input type="text" className="form-control" name="email" onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                    {/* <label></label> */}
                                    <button onClick={this.displayUsers}> LogIn</button>
                                    <h4>New user ? Register here</h4>
                                    {/* <input type="button"className="login-button" value="LogIn" />
                                     */}
                                    <Link to= "register"> Register new user</Link>
                    </div>
                    </form>
                    </div>
        )  
    }
}