import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Navbar = (props)=>{
  let login = function(){
    var trueOutput = 
      [
        <li key="CreatePost"><Link to={"/create-post"} >CreatePost</Link></li>,
        <li key="Sign Out"><Link to={"/sign-out"} >Sign Out</Link></li>
      ]
    // console.log(props)
    if (props.user) {
        return(trueOutput)
    } else {
        return (<li key="login"><Link to="/login">Login</Link></li>)
    }
  };
  var links= ["About", "Classes", "Gallery", "Calendar", "Contact" , "Forms"]
  links = links.map(function(element,index){
    return(<li key={index}><Link to={"/"+element.toLowerCase()}>{element}</Link></li>)
    })
  return (
    <div>
      <nav>
        <p className="brand">h2ka</p>
        <ul className="navBar">
          <li key={"Home"}><Link to={"/"}>Home</Link></li>
          {links}
          {login()}
        </ul>
      </nav>
    </div>
  )
}

const stateToProps = (state)=>{
  return {user : state.user}
}

export default connect(stateToProps)(Navbar)
