import React from "react";
import Navbar from "../Navbar";
import { FaStar } from "react-icons/fa";

const Product = () => {
    return (
        <>
            <Navbar/>
         
      {/* ...........aside-bar........... */} 
        <div className="aside-bar-main-content warapper">
      <aside className="aside-section">
            <div className="aside-section-header">
                <h3 className="aside-section-title">Filters</h3>
                <a href="#" className="clear-btn">Clear All</a>
            </div>

            <div className="price-section">
                <h3 className="aside-section-title-md">Price Range</h3>

               
                <div className="range-input-container">
                    
                    <div className="price-label">
                        <p>{'\u20B9'} 500</p>
                        <p>{'\u20B9'} 1000</p>
                        <p>{'\u20B9'} 1500</p>
                        <p>{'\u20B9'} 2000</p>
                    </div>
                    <label className="slider" htmlFor="volume">
                        <input className="input-range"
                       
                         type="range" min="500" max="2500" 
                         />
                    </label>

                </div>
            </div>

            <div className="category-section-aside">
                <h3 className="aside-section-title-md">Categories</h3>
                <div className="checkbox-input">
                    <input type="checkbox" 
                    name="check" className="checkbox"  />
                    <label htmlFor="check">All Plants</label>
                </div>
               
                <div className="checkbox-input">
                    <input type="checkbox"
                     name="check" className="checkbox" /><label htmlFor="check"> Air Purifying
                        Plants</label>
                </div>

                <div className="checkbox-input">
                    <input type="checkbox"
                     name="check" className="checkbox" /><label htmlFor="check"> Flowering Plants</label>
                </div>
                
                <div className="checkbox-input">
                    <input type="checkbox" 
                    name="check" className="checkbox" /><label htmlFor="check"> Indoor Plants</label>
                </div>

                <div className="checkbox-input">
                    <input type="checkbox"
                     name="check" className="checkbox" /><label htmlFor="check"> Herb Plants</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Rating</h3>

                <div className="radio-input">
                    <input type="radio"
                   
                    value="4"
                 
                     name="radio" className="radio" /><label htmlFor="radio"> 4 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
                   
                    value="3"
                    
                    name="radio" className="radio" /><label htmlFor="radio"> 3 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
               
                    value="2" 
                 
                    name="radio" className="radio" /><label htmlFor="radio"> 2 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                    <input type="radio" 
                  
                    value="1"
                   
                    name="radio" className="radio" /><label htmlFor="radio"> 1 <FaStar className="fa fa-star"
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Sort By</h3>

                <div className="radio-input">
                    <input 
                    
                    type="radio" name="sortby" className="radio" /><label htmlFor="radio"> Low to High</label>
                </div>

                <div className="radio-input">
                    <input 
                   
                    type="radio" name="sortby" className="radio" /><label htmlFor="radio"> High to Low</label>
                </div>
            </div>

        </aside>
 
       {/* ...........main content........... */}

        <section className="products">
            <h1>Showing All Products</h1>
            <div className="flex-row flex-wrap">
                            
                <div className="card-vertical card-dark">
                    <div className="card-img-container">
                        <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam saepe quidem veniam.</h1>
                        <h2 className="card-price">999/-</h2>
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
                <div className="card-vertical card-dark">
                    <div className="card-img-container">
                        <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                        <h2 className="card-price">999/-</h2>
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
                <div className="card-vertical card-dark">
                    <div className="card-img-container">
                        <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                        <h2 className="card-price">999/-</h2>
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
                <div className="card-vertical card-dark">
                    <div className="card-img-container">
                        <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        <h2 className="card-price">999/-</h2>
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
                <div className="card-vertical card-dark">
                    <div className="card-img-container">
                        <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        <h2 className="card-price">999/-</h2>
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
                
                </div>
                <div className="flex-row flex-wrap">
                           
                    <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </h1>
                            <h2 className="card-price">999/-</h2>
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
                    <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </h1>
                            <h2 className="card-price">999/-</h2>
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
                    <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            </h1>
                            <h2 className="card-price">999/-</h2>
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
                    <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            </h1>
                            <h2 className="card-price">999/-</h2>
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
                    <div className="card-vertical card-dark">
                        <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src="/image/man's/m1.jpeg" alt="product-image" loading="lazy" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </h1>
                            <h2 className="card-price">999/-</h2>
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
                
                </div>
        </section>
    </div>
   </> )
};
export {Product};