import React from 'react';
import Navbar from '../components/navbar/Navbar';
const Login = () => {
    return (
        <>
        <Navbar/>
         <div className="container-login">
        <div className="login-container-form">
            <div className="login-form-header">
                <h2>Login</h2>
            </div>
              <label className="label" for="input">Email adress</label>
              <input className="input-lg" type="email" placeholder="Enter Email"/>
              <label className="label" for="input">Password</label>
              <input className="input-lg" type="password" placeholder="************"/>
              <div class="input-check-btn">
                <input className="input-checkbox" type="checkbox"/>
                <h3>Remember me</h3>
                <span className="frg-paswrd"> Forgot your Password?</span>
              </div>
              <a className="Login-btn" href="#">Login</a>
              <div className="login-create-acc">
              <a href="/SignIn/SignIn.html"><h4>Create New Account</h4></a>
              </div>
              </div>
              </div>
              </>

        
        
    )
};
export { Login };