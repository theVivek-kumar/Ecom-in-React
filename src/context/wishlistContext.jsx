import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
const WishListContext = createContext();


const WishListProvider = ({ children }) => {

    const [wishList, setwishList] = useState([]);
    

async function removeFromWishList(productId , setwishList) {
    const response = await axios({
        method: 'delete',
        url: `/api/user/wishlist/${productId}`,
        headers: {
            authorization: localStorage.getItem("token"),
        
        },
    })
    setwishList(response.data.wishlist);
    console.log("remove from wishlist", wishList)
    }
    
    async function addToWishList(product, setwishList) {
        if(wishList.find((element) => element._id === product._id )){
            return console.log("already in wishlist")
        }
    const response = await axios({
        method: 'post',
        url: `/api/user/wishlist`,
        headers: {
            authorization: localStorage.getItem('token')
        },
        data: {
            product: product
        }
    });
       setwishList(response.data.wishlist)
       console.log("add into wish");
       console.log(response.data.wishlist)
}
    return (
        <WishListContext.Provider value={{ wishList, setwishList, removeFromWishList, addToWishList }}>
            {children}
        </WishListContext.Provider>
    )
}
export { WishListContext, WishListProvider };
