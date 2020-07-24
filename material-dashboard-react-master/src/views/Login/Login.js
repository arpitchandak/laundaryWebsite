import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../assets/css/App.css";

export default class Login extends React.Component {
 
  constructor(props){
      super(props)

      this.state ={
          email:"",
          password: ""
      }
  }

   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

   handleSubmit(event) {
    event.preventDefault();

    if (this.state.email === "laundary123@gmail.com" && this.state.password === "123456") {
        localStorage.setItem("adminAuth","authVerified")
        window.location.reload(false)
    } else {
        alert("Wrong id Password!!")
    }
  }

  render(){
    return (
        <div className="Login">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email : e.target.value})}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={e => this.setState({ password : e.target.value})}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
              Login
            </Button>
          </form>
        </div>
      );
  }
  
}