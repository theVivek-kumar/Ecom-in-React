import React from 'react';
import { BiSearch } from "react-icons/bi";
const Footer = () => {
    return (
        <div className='Footer-body-container'>
            <div className='footer-container-table' >
                <div className='footer-contact one'>CONTACT</div>
                <div className='footer-contact two' >1234-3456-5678</div>
                <div className='footer-contact three'>FASHION SHOP</div>
             </div>
             <div className='footer-container-table' >
                <div  className='footer-contact one'>E-MAIL US</div>
                <div  className='footer-contact two'>1234GYM@gmail.com</div>
                <div  className='footer-contact three'>facebook
                    instagram
                </div>
             </div>
             <div className='footer-container-table' >
                <div className='footer-contact one'>Get notified for our secret scale!</div>
                 <div className='navbar-searchbox-container'>
                <input className='search-input' placeholder=' Search for procuct,and more...'  ></input><BiSearch className='search-icon' />
                </div>
                <div>
                    <ul className='footer-list'>
                        <li>
                            Company
                        </li>
                         <li>
                            Information
                        </li>
                         <li>
                            Customer Service
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
          
};
export { Footer };