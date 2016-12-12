import React from 'react';

const IndividualPost = React.createClass({
  render: function (){
    return (
      <div>
          <div>
            <p>title : {this.props.blogPost.title}</p>
            <p>author: {this.props.blogPost.user.username}</p>
            <p>body: {this.props.blogPost.body}</p>
            <p>created at {this.props.blogPost.createdAt}</p>
          </div>

      </div>
    )
  }
})

export default IndividualPost;
