<<<<<<< HEAD
import React from 'react';
import {Redirect} from 'react-router';
import {REGISTER_URL} from 'views/constants';

class Register extends React.Component{
  constructor() {
      super()
      this.state = {
          name:'',
          email:'',
          password:'',
          redirect:false
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
      this.setState({name:event.target.value})
  }

  handleEmailChange(event){
      this.setState({email:event.target.value})
  }
  handlePasswordChange(event){
      this.setState({password:event.target.value})
  }
  handleSubmit(event){
      this.doRegister()
      event.preventDefault()
  }

  doRegister(){
      let data = {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
      }

  fetch(
      REGISTER_URL,
    {
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
      
  )
    .then((response) => {
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response 
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.status === "success") {
            this.setState({
                name:'',
                email:'',
                password:''
            })
            this.setState({redirect:true})
        } else {
            alert('Authentication error')
        }
        })
        .catch((err) => {
            throw Error(err)
        })
    }

    render(){
        if(this.state.redirect) return <Redirect to="/login"/>;

        return (
            <div className="App">
                <h1 className="title">Register</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input 
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            ref={(input)=> {this.name = input;}}/>
                        </label>
                        <br/>

                        <label>
                            Email:
                            <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}/>
                        </label>
                        <br>
                        </br>

                        <label>
                            Password:
                            <input
                            type="password"
                            name="email"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}/>
                        </label>

                        <br/>
                        <br/>
                        <button className="btn-rgs">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}


=======
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter Username"
             floatingLabelText="username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
>>>>>>> 929742a05807b5a8926841a2806be2b30d222d1f
export default Register;