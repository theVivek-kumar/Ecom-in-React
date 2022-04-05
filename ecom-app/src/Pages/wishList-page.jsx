import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useContext, useEffect } from 'react';
import { WishListContext } from '../context/wishlistContext';
import axios from 'axios';
import { CartContext } from '../components/cartPage/cartContext';
import { Card } from '../components/Card/Card';


const wishListpage = () => {
    const { wishlist, setwishlist, removeFromWishlist, addTowWishList } = useState(WishListContext);
    const { cart, setCart, addToCart } = useState(CartContext);

    useEffect( () => {
            (async () => {
                const response = axios({
                    method: 'get',
                    url: "/api/user/wishlist",
                    headers: { authorization: localStorage.getItem('token') },
                });
                if ((await response).status === 200) {
                    setwishlist((await response).data.wishlist);
                }
            })();
        }, []);  
    return (
        <>
            <Navbar />
            <div className='wishlist-section-md'>
                <div className='wishLst-container'>
                    <h2 className='wishlist-title'>My <span>Wish</span></h2>
                    </div>
                 <div className=' wishList-items-add'>
                 <div className='wishlist-header'>      
                 </div>
                    {
                        wishlist.map(item => (<Card key={item._id} product={item}
                            addToCart={() => addToCart(item, setCart)}
                            addToWishlist={()=>removeFromWishlist(item._id,setwishlist)}
                            />))
                    }
                 </div>
                
         </div>
        </>
  )
}

export { wishListpage };