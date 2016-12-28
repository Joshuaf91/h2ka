import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';

//store
import {Provider} from 'react-redux';
import Store from './store/store';
import user_actions from './actions/user-action';

// components
import Navbar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from "./components/Login";
import Classes from "./components/Classes";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const App = withRouter((props)=>
  (
  <div>
    <Navbar />
    {props.children}
  </div>
  )
)

const signOut= function(){
  //end session for now just setting state to false but session has not really ended.
  Store.dispatch(signOut());
}

ReactDOM.render(
  <Provider store={Store}>
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={user_actions.validate()}>
      <IndexRoute component={BlogPosts} />
      {/*<Route path="/about" component={About}></Route>*/}
      <Route path="/classes" component={Classes}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/create-post" component={CreatePost}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/sign-out" onEnter={signOut}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
)
