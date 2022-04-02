import { CardHorizontal } from "../Card/cardHoeizontal";
import { Card } from "../Card/Card";
import Navbar from "../Navbar";
import "../Card/Card";
import { CartContext } from "./cartContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
    
    const { cart, setCase } = useContext(CartContext);
    useEffect(() => {
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
