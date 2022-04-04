
import React from 'react'
import Navbar from '../navbar/Navbar'


const Signin = () => {
    return (
        <>
            <Navbar />
            <div className="container-login">
                <div className="login-container-form">
                    <div className="login-Fp-header">
                        <h2>Signup</h2>
                    </div>
                    <label className="lable" for="input">Email adress</label>
                    <input className="input-lg" type="email" placeholder="Enter Email" />
                    <label className="lable" for="input">Password</label>
                    <input className="input-lg" type="password" placeholder="************" />
                    <label className="lable" for="input">Password</label>
                    <input className="input-lg" type="password" placeholder="Confirm-Password" />
                    <div className="input-check-btn">
                        <input className="input-checkbox" type="checkbox" />
                        <h3>I accept all the term & conditions</h3>
                
                    </div>
                    <a className="Login-btn" href="#">Create New Account</a>
                    <div className="login-create-acc">
                        <h4>Already have an Account</h4>
                    </div>
                </div>
            </div>
        </>
          

      
    )
};

export { Signin };