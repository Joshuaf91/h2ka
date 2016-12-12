import React from 'react';
import {Link} from 'react-router';

const Navbar = React.createClass({
  login: function(){
    var trueOutput = 
      [
        <li><Link to={"/create-post"} key="CreatePost">CreatePost</Link></li>,
        <li><Link to={"/sign-out"} key="Sign Out">Sign Out</Link></li>
      ]
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
        return(trueOutput)
    } else {
        return (<li><Link to="login" key="login">Login</Link></li>)
    }
  },
  render: function(){
    var links= ["About", "Classes", "Gallery", "Calendar", "Contact"]
    links = links.map(function(element,index){
      return(<li key={index}><Link to={"/"+element.toLowerCase()} key={index}>{element}</Link></li>)
      })
    return (
      <div>
        <nav>
          <p className="brand">h2ka</p>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            {links}
            {this.login()}
          </ul>
        </nav>
      </div>
    )
  }
})

export default Navbar;
