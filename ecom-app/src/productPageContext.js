import { createContext, useContext, useReducer, useEffect, useState } from "react";
const ProductPageContext = createContext();
const productPageProvider = ({ children }) => {
    const [sort, setSort] = useState(false);
    const [rating, setRating] = useState(false);
    const [priceRange, setPriceRange] = useState(1500);
    const [category, setCategory] = useState({allProducts: true, shirt: false, huddies: false, denim: false, watch: false,});
    
    localStorage.setItem('token', "")
    return (
        <ProductPageContext.Provider value={{ sort, setSort, rating, setRating, priceRange, setPriceRange, category, setCategory }}>
            {children}
        </ProductPageContext.Provider>
    );
}
export { ProductPageContext, productPageProvider };