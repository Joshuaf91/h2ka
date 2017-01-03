import React from 'react';
// import {Link} from 'react-router';
import {connect} from 'react-redux';

const IndividualPost = (props)=>{
  const goToFullPost=()=>{
    // for some reason this can't directly call router.push();
    props.goTo("/fullpost/"+props.blogPost.id)
  }
  return (
    <div>
          <div onClick={goToFullPost}>
            <p>title : {props.blogPost.title}</p>
            <p>author: {props.blogPost.user.username}</p>
            <p>body: {props.blogPost.body}</p>
            <p>created at {props.blogPost.createdAt}</p>
          </div>
    </div>
)
}



export default IndividualPost;
