import React from 'react';

const Navbar = React.createClass({
  render: function(){
    return (
      <div>
        <nav>
          <p className="brand">h2ka</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Classes</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
})

export default Navbar;
