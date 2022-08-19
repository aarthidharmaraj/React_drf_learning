
import React from 'react'
import './formInput.css'
const defaultValues= {
    name:"",
    email:"",
    language:"",
    password:"",
    confirm_password:"",
    nameError:null,
    emailError:null,
    passwordError:null,
    valueError:null,
    CpasswordError:null,
    matchError:null,
}
export default class FormValidateComp extends React.Component{
    constructor(){
        super();
        this.state = defaultValues
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
        
    }
    validate(){
        let valueError = "";
        let nameError="";
        let emailError = "";
        let passwordError = "";
        let matchError="";
        let CpasswordError="";
        if(!this.state.name){
            nameError = "Name field is required";
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
            emailError = "Email Field is Invalid ";
        }
        if (!this.state.language){
            valueError="Select a value from the given list"
        }
        if(!this.state.password){
            passwordError = "Password field is required";
        }
        if(!this.state.confirm_password){
            CpasswordError = "Confirm Password field is required";
        }
        if (!(this.state.password === this.state.confirm_password)){
            matchError="Password and Confirm Password are not matched"
        }
        if(emailError || valueError || passwordError || nameError || matchError||CpasswordError){
            this.setState({valueError,emailError,passwordError,nameError,matchError,CpasswordError});
            return false;
        }
         return true;
    }
    handleSubmit(event){
        alert("Are you sure to submit the form")
        event.preventDefault()
        if(this.validate()){
            console.warn(this.state);
            this.setState(defaultValues);
        }
    }
    render(){
        return(
            <div className='container'>
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            <div className="form">
                        <h3>React Form Validation</h3><br />
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.nameError}</span>
                                    <label>Email :</label>
                                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                <label>Select Language</label>
                                    <select value={this.state.language} name="language" onChange={this.handleInputChange}> 
                                    <option>select </option>
                                    <option value="Python"> Python</option>
                                    <option value="Java"> Java</option>
                                    <option value="Django"> Django</option>
                                    <option value="React"> React</option>
                                    </select>
                                    <span className="text-danger">{this.state.valueError}</span>
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                    <label>Confirm Password :</label>
                                    <input type="password" className="form-control" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.CpasswordError} {this.state.matchError}</span>
                                    <label></label>
                                    <input type="submit"className="submit-button" value="Submit" />
                    </div>
                    </form>
                    </div>
        )  
    }
}