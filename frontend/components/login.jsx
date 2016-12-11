import React from 'react';
import {ajax} from 'jquery';

const Login = React.createClass ({
  getInitialState: function(){
      return {
        username: "",
        password: ""
      }
  },
  handleChange: function(input, e){
    this.setState({
      [input]: e.target.value
    })
  },
  submit: function(e){
    e.preventDefault()

    ajax({
      url: "/api/user/validate/" + this.state.username + "/" + this.state.password,
      type: "GET",
      data: this.state
    })
    .then(function(data) {
      console.log(data)
    })
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.username} onChange={this.handleChange.bind(this, "username")} placeholder="username"></input>
          <input type="text" value={this.state.password} onChange={this.handleChange.bind(this, "password")} placeholder="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
})

export default Login;
