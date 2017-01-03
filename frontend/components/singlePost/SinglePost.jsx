import React from 'react';
import {ajax} from 'jquery';
import {connect} from 'react-redux';

import Store from '../../store/store';
import blog_Action from '../../actions/blog-action';

const SinglePost = (props)=>{
	console.log(props);
	let displayEdit = props.post.userId === props.user.id;
	const edit = ()=>{
		props.router.push('/fullpost/' + props.params.id + '/edit')
	};
	return (
		<div>
			<h2>title: {props.post.title}</h2>
			<p>author: {props.post.user.username}</p>
			<p>body: {props.post.body}</p>
            <p>created at {props.post.createdAt}</p>
            {displayEdit ? <button onClick={edit}>edit</button> : null}
		</div>
		)
}

const stateToProps = (state, ownprops)=>{
	// console.log(ownprops)
	var post;
	for(var key in state.blog){
		console.log(state.blog[key].id)
		console.log(ownprops.routeParams.id)
		if(state.blog[key].id == ownprops.routeParams.id){
			post = state.blog[key];
			break;
		}
	}
	return {
		post,
		user: state.user
	}
}

export default connect(stateToProps)(SinglePost)