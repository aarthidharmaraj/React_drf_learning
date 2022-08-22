import React, { Component } from 'react'
import axios from'axios'

export default class UserLogin extends Component {
    constructor(){
        super();
        this.state = {fields:""}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginUser=this.loginUser.bind(this);
    }
    handleInputChange(event) {
        let fields=this.state.fields
        const target = event.target;
        var value = target.value;
        const name = target.name;
        fields[name]=value
        
        this.setState({
            fields
        },()=>{
            console.log(this.state.fields);
        })
        
    }
    validate(){
        let emailError = "";
        let passwordError = "";
        let matchError="";
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
            emailError = "Email Field is Invalid ";
        }
        if(!this.state.password){
            passwordError = "Password field is required";
        }
        // if (!(this.state.password === this.state.confirm_password)){
        //     matchError="Password and Confirm Password are not matched"
        // }
        if(emailError|| passwordError || matchError){
            this.setState({emailError,passwordError,matchError});
            return false;
        }
         return true;
    }

    loginUser(event){
        event.preventDefault()
        let fields=this.state.fields
        axios.get("http://localhost:9000/registeredusers").then((response) => {
            const persons = {}
            this.setState ({fields:persons})
            console.log("data",fields['email'],fields['password'])
        alert("Trying to login user", fields['email']);
    }).catch((error) => {
        alert("Login Failed",error)})
    }
    // handleSubmit(event){
    //     alert("Are you sure to submit the form")
    //     event.preventDefault()
    //     // if(this.validate()){
    //         console.warn(this.state);
    //         this.setState({email:this.state.email},{password:this.state.password});
    //     // }
    // }
    render(){
        return(
            <div className='container'>
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            <div className="form">
                        <h3>User Login</h3><br />
                                    <label>Email :</label>
                                    <input type="text" className="form-control" name="email" onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                    <label></label>
                                    <button onClick={this.loginUser}> LogIn</button>
                    </div>
                    </form>
                    </div>
        )  
    }
}