import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";

function Card({ product,addToCart,addToWishlist}) {
    const {title, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
    return (
      
      <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src={img} alt="product-image" loading="lazy" />
                         </div>
                         <div className="card-text">
                <h1 className="card-title title">{title}
                    <p className="card-title desc">{desc}</p>
                </h1>
                </div>
                                <div class="badge-rating">{rating}
                                      <BsFillStarFill/>
            </div>
                         <div className='price-discription-container'>
                         <h2 className="card-price orignal">{original}</h2>
                         <h2 className="card-price discount">{discount}</h2>
                         <h2 className="card-price discounted">{discounted}</h2>
                         </div>
                         <div className="card-nav">
                            <div className="card-cta-btn">
                                <button className="btn primary-btn-sm add-cart">Add to Cart</button>
                    <div className="card-nav-icon">
                                    <button className="btn primary-btn-sm add-cart wishlist">move to Wishlist</button>
                                   
                                </div>
                            </div>
                        </div>
        </div>
        
  )
}
export { Card };