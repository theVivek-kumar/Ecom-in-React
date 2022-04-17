import { Card } from "../Card/Card";
import Navbar from "../navbar/Navbar";
import { CartContext } from "./cartContext";
import { useContext, useEffect } from "react";
import  axios from "axios";
import { CardHorizontal } from "../Card/cardHorizontal";
import { WishListContext } from "../../context/wishlistContext";
import { Cartprice} from "../cartprice";
import { MdRemoveShoppingCart } from "react-icons/md";
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
            <h3 className="cart-heading-my-cart" style={{ color: "white", fontSize: "3rem", marginTop: "4rem" }}>My<span style={{ color: "#f5ac2c" }}>-Cart</span> </h3>
            <div className="cartpage-grid-view">
            <div className=" cart-page-container-md">
            <section className="cart-section-cart-view">
                <div className="cart-section-card">
                    
                        {cart.map(item => (< CardHorizontal product={item} removeFromCart={() =>removeFromCart(item._id,setCart) }
                            addToWishList={() => addToWishList (item , setwishList) } />))}
                    

                </div>    
            </section>
            
            </div>
            {
                    cart.length === 0 ? <div className="cart-heading-my-cart"></div> : <Cartprice qty={quantity} price={price} discountPrice={discountedPrice} totalPrice={totalPrice}/>
                    
                }
            </div>
               
              <h3 className="cart-heading" style={{ color: "white", fontSize: "4rem" }}>Your cart is<span style={{ color: "#f5ac2c", alignItems: "center" }}>-Empty -- </span> <MdRemoveShoppingCart /></h3>
            
            
            </>
          
    )
}; 
export { CartPage };
