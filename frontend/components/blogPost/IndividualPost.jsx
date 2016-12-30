import React from 'react';
import {Link} from 'react-router';

const IndividualPost = (props)=>{
  return (
    <div>
        <Link to={"/fullpost/"+props.blogPost.id}> 
          <div >
            <p>title : {props.blogPost.title}</p>
            <p>author: {props.blogPost.user.username}</p>
            <p>body: {props.blogPost.body}</p>
            <p>created at {props.blogPost.createdAt}</p>
          </div>
        </Link>

    </div>
)
}

export default IndividualPost;
