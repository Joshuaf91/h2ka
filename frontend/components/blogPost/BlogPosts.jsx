import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import IndividualPost from './IndividualPost';

import store from '../../store/store';
import blog_Actions from '../../actions/blog-action';

const BlogPosts = (props)=>(
  <div>
    {
      props.blog ? props.blog.reverse().map((element, index)=>{
        element.createdAt = element.createdAt.split('.')[0];
        return(
          <IndividualPost blogPost={element} key={index}/>
    )}) : null
    }
  </div>
)



const stateToProps = (state)=>{
  return {blog : state.blog}
}

export default connect(stateToProps)(BlogPosts)
