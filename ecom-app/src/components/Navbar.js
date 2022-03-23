import React from 'react';
import { BsCartCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";


const navbar = () => {
  return (
    <nav className="navbar-head-container">
        <div className="navbar-md-head">

            <div className="navbar-head-logo">
            <h2 className='navbar-header'>FASHION <span className='navbar-header-heading'> SHOP</span></h2>
      </div>
      
      <div className='navbar-searchbox-container'>
          <input className='search-input' placeholder=' Search for procuct,and more...'  ></input> <div className='search-icon'><BiSearch className='search-icon' />
          </div>
        
      </div>
      <div className='navbar-icons'>
        <BsCartCheck className='icons' />
        <BiUser className='icons'/>
        <BiHeart className='icons'/>
      </div>
      <div className='seprator'></div>
      <div className='navbar-login-signin'>
        <button className='btn-login'>LogIn</button>
        <button className='btn-sigin'>SignIn</button>
      </div>
      </div>
    </nav >
  )
};
export default navbar;