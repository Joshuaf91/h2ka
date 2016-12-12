import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// components
import Navbar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from "./components/Login";
import Classes from "./components/Classes";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <Login />
        <CreatePost />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BlogPosts} />
      <Route path="/about" component={About}></Route>
      <Route path="/classes" component={Classes}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/create-post" component={CreatePost}></Route>
      <Route path="/login" component={Login}></Route>
      {/* <Route path="/sign-out" onEnter={}></Route> */}
      <Route path="/contact" component={Contact}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
