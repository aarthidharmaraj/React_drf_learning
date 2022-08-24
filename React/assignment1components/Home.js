import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div><h1> Welcome to Home Page</h1>
      <li>
      <Link to= "about">About</Link></li>
      <li>
      <Link to= "register"> User Registration</Link></li>
      <li>
      <Link to= "login"> User Login</Link></li>
      <li><Link to="display_users">Display Users</Link></li>
      </div>
    )
  }
}
