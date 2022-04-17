import { createContext, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const removeFromCart = async (productId, setCart) => {
        try {
            const response = await axios.delete(`/api/user/cart/${productId}`,
                {
                    headers: {
                        authorization: localStorage.getItem('token'),
                    },
                }
            );
          if (response.status === 200) {
            setCart(response.data.cart);
            console.log("cart items",response.data.cart)
            }
                
        } catch (error) {
        console.log(error); 
        }
    };
    

    const changeCartQty = async (actiontype, productId) => {
        try {
            const response = await axios.post(`/api/user/cart/${productId}`,
                {
                action: {
                  type: actiontype
                    }
                       },
                {
                    headers: {
                        authorization: localStorage.getItem('token'),
                    },
                }
            );
           if (response.status === 200) {
                setCart(response.data.cart);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    const addToCart = async (item, setCart) => {
         if( (cart.find((element) => element._id === item._id))) {
        return 
      }
        try {
            const response = await axios.post('/api/user/cart/', { product: item }, {
                headers: {
                    authorization: localStorage.getItem('token'),
                },
            }
            );  
            console.log(response.data);
            if (response.status === 200) {
                setCart(response.data.cart);
                console.log("items in cart", cart)
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart,changeCartQty, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
export { CartContext, CartProvider };
         