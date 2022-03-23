import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Cardcategory = () => {
    
    return (
          <div className="product-category-index">
         
            <div className="card-product-section-category">
                 
                <div className="card-product-section-category-content">
                    <img className="logo-img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2340648/2018/4/26/11524727205135-Roadster-Men-Teal-Printed-Round-Neck-T-shirt-4881524727204967-1.jpg" alt="img"></img>
                    <h3 className="card-product-heading" ></h3>
                    <p>T-Shirts</p>
                    <a className="card-getstart-btn">GET STARTED
                    <BsFillArrowDownCircleFill/></a> 
                </div>
                <div className="card-product-section-category-content">
                    <img className="logo-img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16052396/2021/11/10/873938a8-33f5-4259-a377-34502092ac291636543484159Jackets1.jpg" alt="img"></img>
                    <h3 className="card-product-heading"></h3>
                    <p>Huddies</p>
                    <a className="card-getstart-btn">GET STARTED
                    <BsFillArrowDownCircleFill/></a>
                </div>
                <div className="card-product-section-category-content">
                    <img className="logo-img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15022294/2021/8/23/df2a9da7-b95d-4217-8ca4-0214e60cd5c81629704091359-Nike-Quest-4-Mens-Running-Shoe-4281629704091058-1.jpg" alt="img"></img>
                    <p>Shoes</p>
                    
                       <a className="card-getstart-btn">GET STARTED
                        <BsFillArrowDownCircleFill /></a>
                    
                </div>
            </div>
        </div>   
    )
}
export { Cardcategory };