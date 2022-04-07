import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useContext, useEffect } from 'react';
import { WishListContext } from '../context/wishlistContext';
import axios from 'axios';
import { CartContext } from '../components/cartPage/cartContext';
import { Card } from '../components/Card/Card';


const WishListpage = () => {
    const { wishList, setwishList, removeFromWishlist, addToWishList } = useContext(WishListContext);
    const { cart, setCart, addToCart } = useContext(CartContext);

    useEffect( () => {
            (async () => {
                const response = await axios({
                    method: 'get',
                    url: `/api/user/wishlist`,
                    headers: { authorization: localStorage.getItem('token') },
                });
                if ( response.status === 200) {
                    setwishList( response.data.wishlist);
                }
            })();
    }, []);
    console.log("uuuuuuuuuuuuuuuuu", wishList);
    return (
        <>
            <Navbar />
            
            { <div className='wishlist-section-md'>
                <div className='wishLst-container'>
                    <h2 className='wishlist-title' style={{
                        color:"white",fontSize:"3rem"}}>My<span style={{color:"#f5ac2c"}}>-Wishlist</span></h2>
                    </div>
                 <div className=' wishList-items-add'>
                 <div className='wishlist-header'>      
                 </div>
                    {
                        wishList.map(item => (<Card key={item._id} product={item}
                            addToCart={() => addToCart(item, setCart)}
                            addToWishList={()=>removeFromWishList(item._id, setwishList)}
                            />))
                    }
                 </div>
                
         </div> }
        </>
  )
}

export { WishListpage };