import { createContext, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const addToCart = async (item, setCart) => {
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
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CartContext.Provider value={{ cart, setCart, total, setTotal, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export { CartContext, CartProvider };
         