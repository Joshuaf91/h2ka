import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

// components
import Navbar from './components/Navbar'

const App = React.createClass({
  render: function(){
    return (
      <Navbar />
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* <IndexRoute component={}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
)
