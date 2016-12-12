import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import Navbar from './components/Navbar';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from "./components/login";

const App = React.createClass({
  CreatePoster: function(){
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    var user = getCookie("userId");
    if (user != "") {
        alert("Welcome again " + user);
        return(true)
    } else {
        return (false)
    }
  },
  signOut: function(){
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    setCookie("userId", 0 , -10);
  },
  render: function(){
    return (
      <div>
        <Navbar />
        {/*<Login />
                <CreatePost />*/}
        {this.CreatePoster() ? <div>
          <CreatePost /> <button onClick={this.signOut}> signOut</button>
          </div> : <Login />}
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
