import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// components
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BlogPost}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
