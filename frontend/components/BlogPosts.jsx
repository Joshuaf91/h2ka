import React from 'react';
import $ from 'jquery';

import IndividualPost from './IndividualPost'

const BlogPosts = React.createClass({
  getInitialState: function (){
    return {
      blogPost: null
    }
  },
  componentDidMount: function (){
    this.handleRetrieveBlogPosts();
  },
  handleRetrieveBlogPosts: function (){
    var that = this;
    $.ajax({
      url: '/api/post',
      type: 'GET'
    })
    .then(function (response) {
      that.setState({
        blogPost: response
      })
    })
  },
  render: function(){
    return (
      <div>
        {
          this.state.blogPost ? this.state.blogPost.map((element, index)=>{
            element.createdAt = element.createdAt.split('.')[0];
            return(
              <IndividualPost blogPost={element} key={index}/>
        )}) : null
        }
      </div>
    )
  }
})

export default BlogPosts;
