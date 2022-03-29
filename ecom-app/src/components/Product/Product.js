import React from "react";
import Navbar from "../Navbar";

const Product = () => {
    return (
        <>
            <Navbar/>
         


       <div className="product-page-main mg-3-bot">
        <button className="show-filter-section-btn btn primary-text-btn-lg">Filter <i className="fas fa-chevron-right"></i></button>
        <form id="filter-section" className="filter-section">
            <button className="filter-close-btn"><i className="far fa-times-circle"></i></button>
            <div className="filter flex-row flex-justify-space-between">
                <h2>Filter</h2>
                <button type="reset">Clear</button>
            </div>
            <div className="price flex-col">
                <h2>Price</h2>
              
                <div className="slider-bar">
                <div className="price-label flex-row flex-justify-space-between">
                       <p>1k</p> <p>2k</p> <p>3k</p> <p>4k</p> 
                    </div>
                       
                        <input className="slider" type="range"/>
                        
                        </div>
                
                 
            </div>
            <div className="category">
                <h2>Category</h2>
                <div>
                  
                    <div className="checkbox-input">
                        <input type="checkbox" name="check" checked/><label for="check">shirts</label>
                    </div>
                   
                    <div className="checkbox-input">
                        <input type="checkbox" name="check" /><label for="check">Jeans</label>
                    </div>
               
                    <div className="checkbox-input">
                        <input type="checkbox" name="check"/><label for="check">Hoodies</label>
                    </div>
                    
                    
                </div>
            </div>
            <div className="brand">
                <h2>Brand</h2>
                <div>
                
                    <div className="checkbox-input">
                        <input type="checkbox" name="check" /><label for="check">Nike</label>
                    </div>
                    
                    <div className="checkbox-input">
                        <input type="checkbox" name="check" /><label for="check">Disel</label>
                    </div>
                  
                    <div className="checkbox-input">
                        <input type="checkbox" name="check" checked /><label for="check">Spyker</label>
                    </div>
                </div>
            </div>
            <div className="rating">
                <h2>Ratings</h2>
             
                <div className="radio-input">
                    <input type="radio" name="radio" /><label for="radio">4 star & above</label>
                </div>
              
                <div className="radio-input">
                    <input type="radio" name="radio" /><label for="radio">3 star & above</label>
                </div>
              
                <div className="radio-input">
                    <input type="radio" name="radio" /><label for="radio">2 star & above</label>
                </div>
               
                <div className="radio-input">
                    <input type="radio" name="radio" /><label for="radio">1 star & above</label>
                </div>
            </div>
            <div className="sort">
                <h2>Sort by</h2>
             
                <div className="radio-input">
                    <input type="radio" name="sort" /><label for="radio">Price - Low to High</label>
                </div>
               
                <div className="radio-input">
                    <input type="radio" name="sort" /><label for="radio">Price - High to Low</label>
                </div>
            </div>
        </form>
 


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