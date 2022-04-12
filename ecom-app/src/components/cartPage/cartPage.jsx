import { Card } from "../Card/Card";
import Navbar from "../navbar/Navbar";
import { CartContext } from "./cartContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { CardHorizontal } from "../Card/cardHorizontal";
import { WishListContext } from "../../context/wishlistContext";
import Cartprice from "../cartprice";

const CartPage = () => {
    
    const { cart, setCart, addToCart, changeCartQty, removeFromCart } = useContext(CartContext);
    const { addToWishList,setwishList } = useContext(WishListContext);
    
    useEffect(() => {
        (async () => {
            const response = await axios({
                method: "get",
                url: "/api/user/cart",
                headers: { authorization: localStorage.getItem('token') },
            
            });
            if (response.status === 200) {
                console.log("cartdetails", response.data.cart);
                setCart(response.data.cart);
            }
        })();
    }, []);

    const price = cart.reduce((acc, curr) => acc = acc + curr.qty * curr.price.original, 0);
    const discountedPrice = cart.reduce((acc, curr) => acc = acc + curr.price.original - curr.price.discounted, 0);
    
    const quantity = cart.reduce((acc, curr) => acc = acc + curr.qty, 0);
    const totalPrice = price - discountedPrice + 199;
    
    

    return (
        <>
            <Navbar />
            <h3 className="cart-heading-my-cart" style={{ color: "white",fontSize:"3rem" } }>My<span style={{color:"#f5ac2c"}}>-Cart</span> </h3>
            <section className="cart-section-cart-view">
                <div className="cart-section-card">
                    {
                        cart.map(item => (< CardHorizontal product={item} removeFromCart={() =>removeFromCart(item._id,setCart) }
                            addToWishList={() => addToWishList (item , setwishList) } />))}
                    

                </div>
              
                {
                    cart.length === 0 ? <h3>your cart is empty</h3> : <Cartprice qty={quantity} price={price} discountPrice={discountedPrice} totalPrice={totalPrice}/>
                    
                }

                
            </section>
        </>
    )
}; 
export { CartPage };
