import React from 'react';


function Card({ product }) {
    const {title, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
    return (
      
      <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src={img} alt="product-image" loading="lazy" />
                         </div>
                         <div className="card-text">
                            <h1 className="card-title">{title}
                            </h1>
                 <h2 className="card-price">{original}</h2>
                <h2 className="card-price">{discount}</h2>
                 <h2 className="card-price">{discounted}</h2>
                         </div>
                         <div className="card-nav">
                            <div className="card-cta-btn">
                                <button className="btn primary-btn-sm add-cart">Add to Cart</button>
                                <div className="card-nav-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-shopping-cart"></i>
                                    <i className="fas fa-share-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}
export { Card };