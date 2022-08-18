import React from 'react'
const defaultValues= {
    name:"",
    email:"",
    language:"",
    password:"",
    confirm_password:"",
    nameError:null,
    emailError:null,
    passwordError:null,
    valueError:null
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
            passwordError = "Confirm Password field is required";
        }
        if (!(this.state.password === this.state.confirm_password)){
            passwordError="Password and Confirm Password are not matched"
        }
        if(emailError || valueError || passwordError || nameError){
            this.setState({valueError,emailError,passwordError,nameError});
            return false;
        }
         return true;
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.validate()){
            console.warn(this.state);
            this.setState(defaultValues);
        }
    }
    render(){
        return(
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            <div>
                        <h3>React Form Validation</h3><br />
                        <div className="form-row">
                                <div className="form-row-col">
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.nameError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row-col">
                                    <label>Email :</label>
                                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row-col">
                                <label>Select Language</label>
                                    <select value={this.state.language} name="language" onChange={this.handleInputChange}> 
                                    <option>select </option>
                                    <option value="Python"> Python</option>
                                    <option value="Java"> Java</option>
                                    <option value="Django"> Django</option>
                                    <option value="React"> React</option>
                                    </select>
                                    <span className="text-danger">{this.state.valueError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row-col">
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-row-col">
                                    <label>Confirm Password :</label>
                                    <input type="password" className="form-control" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-submit">
                                    <input type="submit"className="submit-button" value="Submit" />
                                </div>
                            </div>
                    </div>
                    </form>
        )  
    }
}