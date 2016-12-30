import React from 'react';
// import {ajax} from 'jquery';
// to be replaced withRouter see line 30ish
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import Store from '../store/store.js';
import user_actions from '../actions/user-action';



const Login = React.createClass ({
  getInitialState: function(){
      return {
        username: "joshuaf91",
        password: "test1"
      }
  },
  handleChange: function(input, e){
    this.setState({
      [input]: e.target.value
    })
  },
  submit: function(e){
    e.preventDefault();
    // console.log(this.props)
    Store.dispatch(user_actions.getUserServer(this.state)
    )
    .then((data)=> {
      // console.log(this.props)
      this.props.router.push('/');
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
