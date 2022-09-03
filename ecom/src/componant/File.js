import { useState, useEffect } from "react";
import Products from "./Products";


export default function File() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);


  return (
    <>
    <Products product={products}/>
    </>
  );
}


