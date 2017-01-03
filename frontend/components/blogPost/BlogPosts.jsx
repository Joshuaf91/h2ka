import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import IndividualPost from './IndividualPost';

import store from '../../store/store';
import blog_Actions from '../../actions/blog-action';

const BlogPosts = (props)=>(
  <div>
    {
      props.blog ? props.blog.map((element, index)=>{
        element.createdAt = element.createdAt.split('.')[0];
        return(
          <IndividualPost blogPost={element} key={index} goTo={props.goTo}/>
    )}) : null
    }
  </div>
)



const stateToProps = (state , ownProps)=>{
  return {
    blog : state.blog, 
    goTo : ownProps.router.push
  }
}

export default connect(stateToProps)(BlogPosts)
