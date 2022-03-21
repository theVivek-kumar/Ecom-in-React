import React from 'react';

const navbar = () => {
  return <
    nav className="navbar-head-container">
        <div className="navbar-md-head">

            <div className="navbar-head-logo">
            <h2>FESHION SHOP</h2>
      </div>
      
      <div className='navbar-searchbox-container'>
      <input className='search-input' placeholder='Enter something'  ></input>
        
      </div>
      <div className='navbar-icons'>
        heart
        cart
        user
      </div>
      <div className='seprator'></div>
      <div className='navbar-login-signin'>
        <button>login</button>
        <button>Signin</button>
      </div>
      </div>
    </nav>
};
export default navbar;