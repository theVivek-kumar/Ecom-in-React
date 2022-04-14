import React, { createContext, useContext } from "react";
import Navbar from "../navbar/Navbar";
import { Card } from "./Card.css";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import { Cardcategory } from "../CardCateories/CardCategory";
import { CartContext } from "../cartPage/cartContext";
import Cartprice from "../cartprice";


const CardHorizontal = ({ product, addToWishList, removeFromCart }) => {
    const {changeCartQty} = useContext(CartContext) 

    
    
    //  ({ product,addToCart,addToWishList}) {
    const {title,qty, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
    return (
        <>
           
        <div className="home-card-container-md">
        <div className="home-card-Md-body">
            <div className="card-img-container">
                            <img className="CARD-IMG-product-list" src={img} alt="product-image" loading="lazy" />
                         </div>
            <div className="card-side">
                <div className="card-heading-md">
                   {/* <h1 className="card-title title">{title}</h1> */}
                    <p className="card-title desc">{desc}</p>
                </div>
               
                
                {/* <div className="card--delivery--msg">FREE delivery on orders over $ 99 </div> */}
                
                <div className="items-quantity">
                     <button onClick = {()=>changeCartQty ('increment',product._id)}><BsPlusCircle/></button> 
                            <div className="number">{qty}</div>
                    <button onClick={()=>changeCartQty("decrement",product._id)} ><FiMinusCircle/></button> 
                </div>
                  <div class="badge-rating">{rating}
                                      <BsFillStarFill/>
                                 </div>
                         <div className='price-discription-container'>
                         <h2 className="card-price orignal">{original}</h2>
                         <h2 className="card-price discount">{discount}</h2>
                         <h2 className="card-price discounted">{discounted}</h2>
                         </div>
                

                <div className="card-heading-md-2">
                    <button className="card-heading-md-1" onClick={removeFromCart}>Remove From cart</button>
                </div>
                
                <div className="card-heading-md-2">
                    <button className="card-heading-md-1" onClick={addToWishList}>Move to wishlist</button>
                </div>
               
            </div>
            </div>
            </div>
            

            </>


    )
        
    
}
export { CardHorizontal };