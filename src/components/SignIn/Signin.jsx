
import React from 'react';
import {FcBusinessman} from "react-icons/fc";
import { NavLink } from 'react-router-dom';


const Signin = () => {
    return (
        <>
            <div className="container-login">
                <div className="login-container-form">
                    
                    <div className="login-Fp-header"><FcBusinessman/></div>
                    <label className="lable" for="input">First-Name</label>
                    <input className="input-lg" type="text" placeholder="Confirm-First-name" />
                    <label className="lable" for="input">Second-Name</label>
                    <input className="input-lg" type="text" placeholder="Confirm-Second-name" />
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
                    <NavLink to="/login"><button  className='create-new-acc'>Already have an Account</button></NavLink> 
                    </div>
                </div>
            </div>
        </>
    )
};

export { Signin };