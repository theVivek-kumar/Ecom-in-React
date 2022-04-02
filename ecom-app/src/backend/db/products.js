import { v4 as uuid } from "uuid";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Checkered Slim fit Casual Shirt",
     rating: 2.7,
    inStock: true,
     price: {
      original: "1800",
      discount: "20%",
      discounted: "1500",
    },
     img: "https://m.media-amazon.com/images/I/61j0cpBJjJS._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",
  },
  {
    _id: uuid(),
    title: "Dennis Lingo",
    desc: "Men's Classic Collar Casual Shirt",
     rating: 3.4,
    inStock: true,
     price: {
      original: "3000",
      discount: "50%",
      discounted: "1500",
    },
     img: "https://m.media-amazon.com/images/I/618Wek95laS._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 5.0,
    inStock: true,
     price: {
      original: "2200",
      discount: "50%",
      discounted: "1100",
    },
     img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "denim",
  
  },
  {
       _id: uuid(),
    title: "Amazon Brand - ",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 4.0,
    inStock: true,
     price: {
      original: "1200",
      discount: "50%",
      discounted: "600",
    },
     img: "https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",

  },
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 3.4,
    inStock: true,
     price: {
      original: "1000",
      discount: "50%",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
  //  
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 2.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "20%",
      discounted: "2000",
    },
     img: "https://m.media-amazon.com/images/I/710k9j2DXaL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",

  },
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 2.4,
    inStock: true,
     price: {
      original: "2500",
      discount: "20%",
      discounted: "1800",
    },
     img: "https://m.media-amazon.com/images/I/61XxnHvE6WL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 2.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "20%",
      discounted: "2000",
    },
     img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 2.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "20%",
      discounted: "2000",
    },
     img: "https://m.media-amazon.com/images/I/61zGzJRsgpL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "hoodie",

  },
   
  


];
