import React, { Component } from 'react'
import axios from'axios'

export default class Registereduserss extends Component {
    constructor(){
        super();
        this.state = {registeredusers:[]}
    }
    componentDidMount(){
        axios.get("http://localhost:9000/registeredusers").then((response) => {
                const userss= response.data
            this.setState({registeredusers:userss})
            // console.log("data",response.data)
            // alert ("The user details are displayed")
    }).catch((error) => {
        alert("Cannot fetch details",error)
})
}
    render(){
        return(<div>
            <h2>The details of registered userss</h2>

            <ul>
                <header>user_name  email  Password</header>
            {this.state.registeredusers.map(users=><li className='users-list' key={users.id}>{users.name} {users.email} {users.password}</li>)}
            </ul> </div>
        )  
    }
}