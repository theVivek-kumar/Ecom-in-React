import React, { createContext, useContext } from "react";
import Navbar from "../navbar/Navbar";
import { Card } from "./Card.css";
import { BsPlusCircle } from "react-icons/bs";
import {FiMinusCircle } from "react-icons/fi";
import { Cardcategory } from "../CardCateories/CardCategory";
import { CartContext } from "../cartPage/cartContext";
import Cartprice from "../cartprice";


const CardHorizontal = ({ product, addToWishList, removeFromCart }) => {
    const {changeCartQty} = useContext(CartContext) 

    
    
    //  ({ product,addToCart,addToWishList}) {
    const {qty, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
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
               
                
                <div className="card--delivery--msg">FREE delivery on orders over $ 99 </div>
                
                <div className="items-quantity">
                    <button onClick = {changeCartQty ('increment',product._id)}><BsPlusCircle/></button>
                            <div className="number">{qty}</div>
                    <button onClick={changeCartQty("decrement",product._id)} ><FiMinusCircle/></button>
                </div>
                <div className="card-para-md">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis. Lorem ipsum dolor sit amet.
                       .</p>
                </div>
                

                <div className="card-heading-md-2">
                    <button onClick={()=>removeFromCart}>Remove From cart</button>
                </div>
                
                <div className="card-heading-md-2">
                    <button onClick={()=>addToWishList}>Move to wishlist</button>
                </div>
               
            </div>
            </div>
            </div>
            

            </>


    )
        
    
}
export { CardHorizontal };