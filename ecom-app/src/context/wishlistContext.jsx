import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
const WishListContext = createContext();


const WishListProvider = ({ children }) => {

    const [wishlist, setwishlist] = useState([]);
    

async function removeFromWishlist(ProducdId, setwishList) {
    const response = await axios({
        method: 'delete',
        url: 'api/user/wishlist/${productId}',
        headers: {
            authorization: localStorage.getItem("token"),
        
        },
    })
    setwishlist (response.data.wishList);
}
async function addTowWishList(product, setwishList) {
    const response = await axios({
        method: 'post',
        url: '/api/user/wishlist',
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            product: product
        }
    });
}
    return (
        <WishListContext.Provider value={{ wishlist, setwishlist, removeFromWishlist, addTowWishList }}>
            {children}
        </WishListContext.Provider>
    )
}
export { WishListContext, WishListProvider };
