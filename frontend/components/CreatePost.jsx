import React from 'react';
import {ajax} from 'jquery';

const CreatePost = React.createClass ({
  getInitialState: function(){
    return {
      title: "",
      body: "",
      userId: 1
    }
  },
  handleChange: function(change, e){
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e){
    ajax({
      url: '/api/post',
      type: "POST",
      data: this.state
    })
    .then(function(response){
      console.log(response)
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

export default CreatePost;
