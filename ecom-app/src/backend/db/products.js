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
     rating: 4.7,
    inStock: true,
     price: {
      original: "800",
      discount: "50",
      discounted: "500",
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
      original: "1000",
      discount: "50",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/618Wek95laS._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",
  },
  {
    _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 4.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "50",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",
  
  },
  {
       _id: uuid(),
    title: "Amazon Brand - Inkast Denim Co",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 4.0,
    inStock: true,
     price: {
      original: "1200",
      discount: "50",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",

  },
  {
       _id: uuid(),
    title: "IndoPrimo",
    desc: "Men's Slim Fit Casual Shirt",
     rating: 4.4,
    inStock: true,
     price: {
      original: "1200",
      discount: "50",
      discounted: "500",
    },
     img: "https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg",
    categoryName: "Shirt",

  },


];
