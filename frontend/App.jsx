import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';

//store
import {Provider} from 'react-redux';
import Store from './store/store';
import user_actions from './actions/user-action';
import blog_actions from './actions/blog-action';
import pdf_actions from './actions/pdf-action';

// components
import Navbar from './components/Navbar';
import BlogPosts from './components/blogPost/BlogPosts';
import Forms from './components/forms/Forms';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Classes from './components/Classes';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';

const App = withRouter((props)=>
  (
  <div>
    <Navbar />
    {props.children}
  </div>
  )
)

const signOut= ()=>{
  //end session for now just setting state to false but session has not really ended.
  Store.dispatch(user_actions.signOut())
  .then(data=>{
    browserHistory.push('/')
  })
}

const validate = ()=>{
  Store.dispatch(user_actions.validate())
}

const getPost = ()=>{
  Store.dispatch(blog_actions.serverGetPost())
}

const getForms = ()=>{
  Store.dispatch(pdf_actions.serverGetPdf())
}

ReactDOM.render(
  <Provider store={Store}>
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={validate}>
      <IndexRoute component={BlogPosts} onEnter={getPost}/>
      {/*<Route path="fullpost/:id" component={SinglePost}/>*/}
      <Route path="/about" component={About}/>
      <Route path="/forms" component={Forms} onEnter={getForms}/>
      <Route path="/classes" component={Classes}/>
      <Route path="/calendar" component={Calendar}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/create-post" component={CreatePost}/>
      <Route path="/login" component={Login}/>
      <Route path="/sign-out" onEnter={signOut}/>
      <Route path="/contact" component={Contact}/>
    </Route>
    {/*<Route path="*" component={NotFound}/>*/}
  </Router>
  </Provider>,
  document.getElementById('root')
)
