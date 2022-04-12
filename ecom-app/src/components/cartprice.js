import React from 'react';
import './Card/Card.css';

function Cartprice({ qty, price, discountPrice, totalPrice }) {
  return (
     <div className="second-card">
            
            <div className="card-side">
                <div className="card-heading-md">
                    <h2>PRICE DETAILS</h2>
                </div>
               
                <div className="card-para-md">
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet. . </p>
                </div>
                <div className="discount-chart">
                    <h4>Price({qty} items)</h4>
                  <h4>{price}</h4>
                    
                </div>
                <div className="discount-chart">
                    <h4>Discount</h4>
                  <h4>{discountPrice}</h4>
                
                </div>
                <div className="discount-chart">
                    <h4>Dilivery Charge</h4>
                    <h4>$50</h4>
                
                </div>
                <div className="discount-chart">
                    <h4>Total Amount</h4>
                  <h4>{totalPrice}</h4>
                
                </div>
                <div className="discount-chart">
                    <h5>You Will Save $89 on This Order</h5>
                    
                
                </div>
                <div className="card-heading-md-2">
                    <h3>Place Order</h3>
                </div>


               
            </div>
        </div>
  )
}

export default Cartprice