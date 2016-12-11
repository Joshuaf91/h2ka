import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// components
import Navbar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost'

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <CreatePost />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BlogPosts}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
