import React from "react";
import Navbar from "../navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { Card } from "../Card/Card";
//  import { products } from "../../backend/db/products";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { ProductPageContext } from "./productPageContext";
import { CartContext } from "../cartPage/cartContext";
import { WishListContext } from "../../context/wishlistContext";



const Product = () => {
    const { sort, setSort, rating, setRating, priceRange, setPriceRange, categoryName, setcategoryName } = useContext(ProductPageContext);
    const [key, setKey] = useState(0); 
    const [productListing, setProductListing] = useState([]);
    const { addToCart, cart } = useContext(CartContext);
    const { addToWishList, wishList ,setwishList} = useContext(WishListContext);

    
    
    function clearFitlters() {
        setSort(true);
        setRating(false);
        setPriceRange(1500);
        setcategoryName({ allProducts: true, Shirt: false, hoodie: false, denim: false, watch: false, });
        console.log("clicked");
        setKey(key + 1);
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get(`api/products`);
            console.log(response.data);
            if (response.status === 200) {
                setProductListing(response.data.products);
            }
        })();
    },[]);
 
    const sortFunction = (productListing, sort) => {
        const sortedProductListing = [...productListing]
        if (sort) {
            return sortedProductListing.sort((a, b) => a.price.discounted - b.price.discounted);
          
        }
            else {
            return sortedProductListing.sort((a, b) => b.price.discounted - a.price.discounted);
            
        }
    }
    console.log(sort);

    const sortedData = sortFunction(productListing, sort);

    const ratingFunction = (productListing , rating) => {
        const sortedProductListing = [...productListing];
        if (rating) {
            return sortedProductListing.filter(product => product.rating >= rating);

        }
        else {
            return sortedProductListing;
        }
    }
    
   
    const filteredData = ratingFunction(sortedData, rating);
    

        const priceRangeFunction = (productListing, priceRange) => {
            const sortedProductListing = [...productListing];
            if (priceRange) {
                return sortedProductListing.filter(product => Number(product.price.discounted) <= Number(priceRange));
            }
            else {
                return sortedProductListing;
            }
    }
    const filteredPriceData = priceRangeFunction(filteredData, priceRange);
   
    const categoryNameFunction = (productListing, categoryName) => {
        const sortedProductListing = [...productListing];
        if (categoryName.allProducts) {
            return sortedProductListing;
        }
        if (categoryName.Shirt) {
            return sortedProductListing.filter(product => product.categoryName === "Shirt");
        }
        if (categoryName.hoodie) {
            return sortedProductListing.filter(product => product.categoryName === "hoodie");
        }
        if (categoryName.denim) {
            return sortedProductListing.filter(product => product.categoryName === "denim");
        }
        if (categoryName.watch) {
            return sortedProductListing.filter(product => product.categoryName === "watch");
        }
        return sortedProductListing;
    }
      const filteredcategoryNameData = categoryNameFunction(filteredPriceData, categoryName);



    
  
    console.log(productListing);
    useEffect(() => {  
    (async ()=>{
        const response = await axios.get('/api/products');
       if(response.status === 200){
           setProductListing(response.data.products);
       }
    })();
    }, [])
    console.log("ccccccccccc",productListing);
  

    return (
        <>
            <Navbar/>
         
      {/* ...........aside-bar........... */} 
        <div className="aside-bar-main-content warapper" key={key}> 
      <aside className="aside-section">
            <div className="aside-section-header">
                <h3 className="aside-section-title">Filters</h3>
                        <a href="#" className="clear-btn"><button className="
                btn-login" onClick={clearFitlters}>Clear All </button></a>
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
                                onChange={(e) => {setcategoryName({...categoryName, allProducts: e.target.checked})}}
                    name="check" className="checkbox"  />
                    <label htmlFor="check">All fashion</label>
                </div>
               
                <div className="checkbox-input">
                            <input type="checkbox"
                                onChange={(e) => {setcategoryName({...categoryName, Shirt: e.target.checked})}}
                     name="check" className="checkbox" /><label htmlFor="check"> Shirt
                             </label>
                </div>

                <div className="checkbox-input">
                            <input type="checkbox"
                                onChange={(e) => {setcategoryName({...categoryName, hoodie: e.target.checked})}}
                     name="check" className="checkbox" /><label htmlFor="check"> Hoodies</label>
                </div>
                
                <div className="checkbox-input">
                            <input type="checkbox" 
                                onChange={(e) => {setcategoryName({...categoryName, denim: e.target.checked})}}
                    name="check" className="checkbox" /><label htmlFor="check"> Denim</label>
                </div>

                <div className="checkbox-input">
                            <input type="checkbox"
                            onChange={(e) => {setcategoryName({...categoryName, watch: e.target.checked})}}
                     name="check" className="checkbox" /><label htmlFor="check"> Watch</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Rating</h3>

                        <div className="radio-input">
                            
                            <input type="radio"
                                onChange={(e) => {setRating(4)}}
                   
                    value="4"
                 
                                name="radio" className="radio" /><label htmlFor="radio"> 4 <FaStar className="fa fa-star"
                               
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                            <input type="radio" 
                                onChange={(e) => {setRating(3)}}
                   
                    value="3"
                    
                                name="radio" className="radio" /><label htmlFor="radio"> 3 <FaStar className="fa fa-star"
                                
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                            <input type="radio" 
                                onChange={(e) => {setRating(2)}}
               
                    value="2" 
                 
                                name="radio" className="radio" /><label htmlFor="radio"> 2 <FaStar className="fa fa-star"
                                
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>

                <div className="radio-input">
                            <input type="radio" 
                                onChange={(e) => {setRating(1)}}
                  
                    value="1"
                   
                                name="radio" className="radio" /><label htmlFor="radio"> 1 <FaStar className="fa fa-star"
                                
                            style={{color: "orange"}}></FaStar> & above</label>
                </div>
            </div>

            <div className="rating-section">
                <h3 className="aside-section-title-md">Sort By</h3>

                <div className="radio-input">
                    <input  onChange={(e)=>setSort(true)}
                    
                             type="radio" name="sortby" className="radio" /><label htmlFor="radio"> Low to High</label>
                            
                </div>

                <div className="radio-input">
                            <input onChange={(e)=>setSort(false)}
                               
                    type="radio" name="sortby" className="radio" /><label htmlFor="radio"> High to Low</label>
                </div>
            </div>

        </aside>
 
       {/* ...........main content........... */}
        
                <section className="products">
                    <h1 className="content-heading">Showing All Products</h1>
            
                    <div className="flex-row flex-wrap">
                        
                        {/* {productListing.map(product => (<Card key={product._id} product={product}/>))} */}
                        {filteredcategoryNameData.map(product => (<Card key={product._id} product={product}
                            addToCart={() => addToCart(product, product._id)}
                            addToWishList={() => addToWishList (product,setwishList)}
                        />))}
                      
                    
                </div>
        </section>
    </div>
   </> )
};
export {Product};