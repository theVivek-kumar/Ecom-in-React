import React from "react";
import  Navbar from "../Navbar";
const CardHorizontal = () => {
    return (
        <>
        <Navbar/>
        <div className="home-card-container-md">
        <div className="home-card-Md-body">
            <div className="card-img-Md">
                <img className="image-card" src="/image/m5.jpeg" alt="image"/>
            </div>
            <div className="card-side">
                <div className="card-heading-md">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <div className="card-heading-md">
                    <h5>$300</h5>
                </div>
                
                <div className="card--delivery--msg">FREE delivery on orders over $ 99 </div>
                
                <div className="items-quantity">
                    <i className="fas fa-plus-circle"></i>
                    <div className="number">2</div>
                    <i className="fas fa-minus-circle"></i>
                </div>
                <div className="card-para-md">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis. Lorem ipsum dolor sit amet.
                       .</p>
                </div>
                

                <div className="card-heading-md-2">
                    <h3>ADD TO CART</h3>
                </div>
                
                <div className="card-heading-md-2">
                    <h4>BUY NOW</h4>
                </div>
               
            </div>
            </div>
            </div>
            </>


    )
        
    
}
export { CardHorizontal };