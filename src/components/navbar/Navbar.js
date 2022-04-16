import React from 'react';
import { BsCartCheck } from "react-icons/bs";
import {BiHeart,BiSearch} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { CartContext } from '../cartPage/cartContext';


const Navbar = () => {
    // const { state, setCart } = CartContext();
    // const { cart, wishList } = state;
  return (
    <nav className="navbar-head-container">
        <div className="navbar-md-head">
            <div className="navbar-head-logo">
            <NavLink to ="/"><h2 className='navbar-header'>FASHION <span className='navbar-header-heading'> SHOP</span></h2></NavLink>
      </div>
      
      <div className='navbar-searchbox-container'>
          <input className='search-input' placeholder='    Search for procuct,and more...'  ></input> <div className='search-icon'><BiSearch className='search-icon' />
          </div>
        
      </div>
      <div className='navbar-icons'>
          {/* <NavLink to = "/cart"><BsCartCheck className='icons' /></NavLink> */}
          {/* <span className="Badhe-nav-num-Tp">{}</span> */}
          <NavLink to ="/Cartpage"><BsCartCheck className='icons' /></NavLink> 
          <NavLink to ="/wishList "><BiHeart className='icons'/></NavLink>
          {/* <NavLink to ="/wishlist"> <BiHeart className='icons'/></NavLink> */}
      </div>
      <div className='seprator'></div>
      <div className='navbar-login-signin'>
        <NavLink to ="/login"><button className='btn-login'>LogIn</button></NavLink>
        <NavLink to ="/signIn"> <button className='btn-sigin'>SignIn</button></NavLink>
      </div>
      </div>
      <div className='seprator'></div>
    </nav >

  )
};
export default Navbar ;