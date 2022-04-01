import React from "react";
import Navbar from "../Navbar";
import { FaStar } from "react-icons/fa";
import { Card } from "../Card/Card";
import { products } from "../../backend/db/products";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { ProductPageContext } from "../../context/productPageContext";



const Product = () => {
    const { sort, setSort, rating, setRating, priceRange, setPriceRange, category, setCategory } = useContext(ProductPageContext);
    const [key, setKey] = useState(0);
    console.log(rating);
    console.log(priceRange);
    console.log(category);
    function clearFitlters() {
        setSort(true);
        setRating(false);
        setPriceRange(1500);
        setCategory({ allProducts: true, shirt: false, huddies: false, denim: false, watch: false, });
        console.log("clicked");
        setKey(key + 1);
    }
    
    
 const [ productListing, setProductListing ] = useState([]);
    console.log(productListing);
    useEffect(() => {  
    (async ()=>{
        const response = await axios.get('/api/products');
       if(response.status === 200){
           setProductListing(response.data.products);
       }
    })();
    }, [])
    console.log(productListing);
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
                        onChange={(e) => {setPriceRange(e.target.value)}}
                                    type="range" min="500" max="2500" 
                                    value={priceRange} id="volume" /></label>
                

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
            <h1 className="content-heading">Showing All Products</h1>
                    <div className="flex-row flex-wrap">
                        
                        {productListing.map(product => (<Card key={product._id} product={product}/>))}
                       
                      
                    
                </div>
        </section>
    </div>
   </> )
};
export {Product};