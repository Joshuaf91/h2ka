import React from 'react';
import {ajax} from 'jquery';
import {connect} from 'react-redux';

import Store from '../store/store';
import blog_Action from '../actions/blog-action';


const CreatePost = React.createClass ({
  getInitialState: function(){
    return {
      title: "",
      body: "",
      userId: this.props.userID
    }
  },
  handleChange: function(change, e){
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e){
    e.preventDefault();

    Store.dispatch(blog_Action.makePost(this.state))
    .then(data =>{
      this.props.router.push('/');
    })

  },
  render: function(){
    return (
      <form onSubmit={this.submit} >
        <input type="text" placeholder="Title" onChange={this.handleChange.bind(this, "title")} value={this.state.title}></input>
        <input type="text" placeholder="Body" onChange={this.handleChange.bind(this, "body")} value={this.state.body}></input>
        <input type="submit" ></input>
      </form>
    )
  }
})

const stateToProps = (state)=>{
  return {userID : state.user.id}
}

export default connect(stateToProps)(CreatePost)
