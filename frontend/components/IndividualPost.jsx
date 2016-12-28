import React from 'react';
import {Link} from 'react-router';

const IndividualPost = React.createClass({
  render: function (){
    console.log(this.props)
    return (
      <div>
          <Link to={"/fullpost/"+this.props.blogPost.id}> 
            <div >
              <p>title : {this.props.blogPost.title}</p>
              <p>author: {this.props.blogPost.user.username}</p>
              <p>body: {this.props.blogPost.body}</p>
              <p>created at {this.props.blogPost.createdAt}</p>
            </div>
          </Link>

      </div>
    )
  }
})

export default IndividualPost;
