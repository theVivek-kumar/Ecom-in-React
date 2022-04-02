import { createContext, useContext, useReducer, useEffect, useState } from "react";
const ProductPageContext = createContext();
const ProductPageProvider = ({ children }) => {
    const [sort, setSort] = useState(false);
    const [rating, setRating] = useState(false);
    const [priceRange, setPriceRange] = useState(1500);
    const [categoryName, setcategoryName] = useState({allProducts: true, shirt: false, huddies: false, denim: false, watch: false,});
    
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM")
    return (
        <ProductPageContext.Provider value={{ sort, setSort, rating, setRating, priceRange, setPriceRange, categoryName, setcategoryName }}>
            {children}
        </ProductPageContext.Provider>
    );
}
export {ProductPageContext, ProductPageProvider};